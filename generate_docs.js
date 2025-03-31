//to run, get the free api key from https://ai.google.dev/gemini-api/docs
//put it into CONFIG.json
//run ```node generate_docs.js``` (node.js is required)
//the result will be in /docs_output/README.md , along with intermediate prompts and responses
//the progress of achieving this result can be found in /docs_output - all the older runs are stored;

// a lot of the code consists of saving the promts and responses from the ai; 3 prompts and 3 responses + 1 final readme.md file; code would be cleaner without these intermediate file logging, but I left them for demonstration of the whole process.
// all there is in the code is reading source files and plugging them into prewritten prompts; there are 3 BIG prompts: first asking to fill out a documentation template; second asking to verify the documentation; third asking to create usage examples;
// the prompts will only work for this package or a very similar one, I tuned them to be optimal for this package; I didn't know to what extent this program should be universal; for a bigger package I think we should split the prompting into smaller pieces: first asking to identify main exported functions; then focusing on a one function at a time: prompting to analyze the function, its paramenters, usage examples. Then move onto another function. An even bigger package would require the AI itself to decide which files it wants to see and analyze, and then provide it with those files (I don't know how to do this yet)


const fs = require('fs').promises;
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function main() {
    const configPath = path.resolve(__dirname, 'CONFIG.json');
    const configData = await fs.readFile(configPath, 'utf8');
    const config = JSON.parse(configData);
        
    const genAI = new GoogleGenerativeAI(config.apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const libraryPath = path.resolve(__dirname, config.libraryPath);
    const templatePath = path.resolve(__dirname, config.templatePath);
    const baseOutputPath = path.resolve(__dirname, config.outputPath);
    
    const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
    const outputPath = path.join(baseOutputPath, timestamp);
    await fs.mkdir(outputPath, { recursive: true });
    
    const packageJsonPath = path.join(libraryPath, 'package.json');
    const packageJsonData = await fs.readFile(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageJsonData);
    
    const templateData = await fs.readFile(templatePath, 'utf8');
    
    const libPath = path.join(libraryPath, 'lib');
    const libFiles = await readDirectory(libPath);
    
    const prompt = buildPrompt(templateData, packageJson, libFiles);
    
    const promptFilePath = path.join(outputPath, 'prompt.txt');
    await fs.writeFile(promptFilePath, prompt);
    
    const result = await model.generateContent(prompt);
    const response = result.response;
    const documentationText = response.text();
    
    const responseFilePath = path.join(outputPath, 'api-response.txt');
    await fs.writeFile(responseFilePath, documentationText);
    
    const outputFilePath = path.join(outputPath, 'README.md');
    await fs.writeFile(outputFilePath, documentationText);
    

    // verify the results with a verification prompt, basically ask ai to verify everything that was received from the last prompt
    const verificationPrompt = buildVerificationPrompt(templateData, documentationText, packageJson, libFiles);
    
    const verificationPromptFilePath = path.join(outputPath, 'verification-prompt.txt');
    await fs.writeFile(verificationPromptFilePath, verificationPrompt);
    
    const verificationResult = await model.generateContent(verificationPrompt);
    const verificationResponse = verificationResult.response;
    const verificationText = verificationResponse.text();
    
    const verificationResponseFilePath = path.join(outputPath, 'verification-response.txt');
    await fs.writeFile(verificationResponseFilePath, verificationText);
    
    let finalDocumentation = documentationText;
    if (!verificationText.includes("change nothing")) {
      // upadate the final documentation file with the verification text if it said to change something
      const outputFilePath = path.join(outputPath, 'README.md');
      await fs.writeFile(outputFilePath, verificationText); 
      finalDocumentation = verificationText;
      await fs.writeFile(outputFilePath, finalDocumentation);
    }
    
    finalDocumentation = await fs.readFile(outputFilePath, 'utf8');
    // sometimes the AI wraps the response in triple backticks, even though I ask not to do so
    if (finalDocumentation.startsWith('```') && finalDocumentation.endsWith('```')) {
      finalDocumentation = finalDocumentation.substring(3, finalDocumentation.length - 3).trim();
      await fs.writeFile(outputFilePath, finalDocumentation);
    }
    
    const examplesPrompt = buildExamplesPrompt(finalDocumentation, packageJson, libFiles);
    
    const examplesPromptFilePath = path.join(outputPath, 'examples-prompt.txt');
    await fs.writeFile(examplesPromptFilePath, examplesPrompt);
    
    const examplesResult = await model.generateContent(examplesPrompt);
    const examplesResponse = examplesResult.response;
    const examplesText = examplesResponse.text();
    
    const examplesResponseFilePath = path.join(outputPath, 'examples-response.txt');
    await fs.writeFile(examplesResponseFilePath, examplesText);
    
    const finalReadme = `${finalDocumentation}\n\n${examplesText}`;
    await fs.writeFile(outputFilePath, finalReadme);
}
// read the /lib directory
async function readDirectory(dirPath) {
  const result = [];
  
  const files = await fs.readdir(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    if (!file.isDirectory()) {
      const filePath = path.join(dirPath, file.name);
      const content = await fs.readFile(filePath, 'utf8');
      
      result.push({
        path: file.name,
        content
      });
    }
  }
  
  return result;
}

function buildPrompt(template, packageJson, libFiles) {

  // i used chat gpt for this fancy map that provides the AI with the filenames and respective content

  let filesContent = libFiles.map(file => 
    `## File: ${file.path}\n\`\`\`\n${file.content}\n\`\`\``
  ).join('\n\n');
  
  return `
You are a technical documentation expert. Please generate API documentation for the following library:

Package.json:
\`\`\`json
${JSON.stringify(packageJson, null, 2)}
\`\`\`

Source Files:
${filesContent}

Please generate documentation following this template:
\`\`\`
${template}
\`\`\`

IMPORTANT INSTRUCTIONS:
1. Only document the main exported functions that are in the index files
2. Do NOT include internal utility functions in the Exported Functions section nor anywhere else
3. Follow the EXACT structure and FORMATTING of the template. Do not give anything else but the information that suits the template
4. Do not add additional sections or repeat function descriptions
5. For the Exported Functions section, only include the main functions with their descriptions and return types
6. When documenting union types (like 'light' | 'dark' | false), format them as \`'light'\` or \`'dark'\` or \`false\` with individual backticks for each value
7. DO NOT wrap your entire response in triple backticks (\`\`\`)
8. Pay careful attention to DEFAULT VALUES in the code - include ALL default values in the Default column
9. Look for fallback patterns like \`options.value ?? presetCfg.value ?? defaultValue\` and use the final fallback value as the default
10. For boolean parameters, always specify default values like \`false\` or \`true\` when they exist
11. For null defaults, show \`null\` in the Default column
12. For numeric defaults (like animation times), always include them in the Default column
14. For the 'preset' parameter, verify that all preset names from the source files are listed as individual backticked values without additional aphostrophes and separated by 'or' in the Type column

`;
}

function buildVerificationPrompt(template, generatedDoc, packageJson, libFiles) {

  // i used chat gpt for this fancy map that provides the AI with the filenames and respective content
  let filesContent = libFiles.map(file => 
    `## File: ${file.path}\n\`\`\`\n${file.content}\n\`\`\``
  ).join('\n\n');
  
  return `
You are a technical documentation expert tasked with verifying the accuracy of generated documentation.

DOCUMENTATION TO VERIFY:
\`\`\`
${generatedDoc}
\`\`\`

TEMPLATE THAT SHOULD BE FOLLOWED:
\`\`\`
${template}
\`\`\`

Package.json:
\`\`\`json
${JSON.stringify(packageJson, null, 2)}
\`\`\`

Source Files:
${filesContent}

TASK:
1. Compare the generated documentation against the source files and template
2. Check for any misalignments, anomalies, or mistakes
3. Verify that everything in the documentation is accurate and based on the actual source code
4. Check that no internal utility functions are documented
5. Ensure only the main exported functions from index files are documented
6. Verify that the documentation follows the exact structure and formatting of the template
7. When documenting union types (like 'light' | 'dark' | false), format them as \`'light'\` or \`'dark'\` or \`false\` with individual backticks for each value
8. DO NOT wrap your entire response in triple backticks (\`\`\`)
9. Verify that ALL default values are correctly documented in the Default column
10. Check for fallback patterns like \`options.value ?? presetCfg.value ?? defaultValue\` and ensure the final fallback value is shown as the default
11. Verify that boolean parameters show their default values (\`true\` or \`false\`) when they exist
12. Ensure null defaults are shown as \`null\` in the Default column
13. Verify that numeric defaults (like animation times) are included in the Default column
14. For the 'preset' parameter, verify that all preset names from the source files are listed as individual backticked values without additional aphostrophes and separated by 'or' in the Type column

IF YOU FIND ANY ISSUES:
- Provide a corrected version of the documentation that follows the template format
- Make sure your corrections maintain the exact structure of the template

IF EVERYTHING IS CORRECT:
- Simply respond with exactly: "change nothing"

DO NOT include any explanations or additional text in your response, only the corrected documentation OR "change nothing".
`;
}

function buildExamplesPrompt(documentation, packageJson, libFiles) {
  
  // i used chat gpt for this fancy map that provides the AI with the filenames and respective content
  let filesContent = libFiles.map(file => 
    `## File: ${file.path}\n\`\`\`\n${file.content}\n\`\`\``
  ).join('\n\n');
  
  return `
You are a technical documentation expert tasked with creating usage examples for a library.

CURRENT DOCUMENTATION:
\`\`\`
${documentation}
\`\`\`

Package.json:
\`\`\`json
${JSON.stringify(packageJson, null, 2)}
\`\`\`

Source Files:
${filesContent}

TASK:
Create a "Usage Examples" section that demonstrates how to use each main exported function from the library.

For each function, provide THREE example code blocks:
1. Using default settings
2. Using a random preset from the available presets
3. Using custom settings with various parameters
4. Note that both functions require at least 'lightColor' parameter, you cannot run it without any parameters;
5. DO NOT USE 'lightColor'  PARAMETER TOGETHER WITH A PRESET!


IMPORTANT GUIDELINES FOR DIFFERENT FUNCTION TYPES:
- For React hooks (functions starting with "use"): Create examples using React components
- For vanilla JavaScript functions (non-hook functions): Create examples using plain JavaScript without React
- Ensure examples match the intended usage pattern of each function type

The examples should:
- Be minimal but complete and functional
- Show real-world usage patterns
- Include proper imports
- Be formatted in Markdown with appropriate language tags (use 'jsx' for React examples and 'js' for vanilla JavaScript)
- Include brief explanations of what each example demonstrates

FORMAT YOUR RESPONSE AS:

## Usage Examples

### [Function Name] Examples

#### Basic Usage (Default Settings)
\`\`\`jsx or js (depending on function type)
// Example code with default settings
\`\`\`

#### Using a Preset
\`\`\`jsx or js (depending on function type)
// Example code with a preset
\`\`\`

#### Custom Configuration
\`\`\`jsx or js (depending on function type)
// Example code with custom settings
\`\`\`

Repeat for each main exported function.

DO NOT include any explanations outside of the examples section. Your entire response should be formatted as a Markdown "Usage Examples" section that can be appended to the existing documentation.
`;
}

main();