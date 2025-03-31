# generate_docs.js

A copy of the final result of this program can be found in ```documentation.md```
To use the **generate_docs.js**, get the free api key from https://ai.google.dev/gemini-api/docs
put it into ```CONFIG.json```
Run ```node generate_docs.js```
The result will be in ```/docs_output/{date}T{time}/README.md``` , along with intermediate prompts and responses
The progress of achieving this result can be found in ```/docs_output``` - all the older program runs are stored;

 A lot of the code consists of saving the promts and responses from the AI; 3 prompts and 3 responses + 1 final README.md file; code would be cleaner without these intermediate file logging, but I left them for demonstration of the whole process.
 
 All there is in the code is reading source files and plugging them into prewritten prompts; there are 3 BIG prompts: first asking to fill out a documentation template; second asking to verify the documentation; third asking to create usage examples.
 
 The prompts will only work for this package or a very similar one, I tuned them to be optimal for this package. I didn't know to what extent this program should be universal. for a bigger package I think we should split the prompting into smaller pieces: first asking to identify main exported functions; then focusing on a one function at a time: prompting to analyze the function, its paramenters, usage examples; then move onto another function. An even bigger package would require the AI itself to decide which files it wants to see and analyze, and then provide it with those files (I don't know how to do this yet).

# testing
**compareToReference.js**

 This code takes screenshots for every test case and compares them to older screenshots in The ```tests/compareToReference.js-snapshots``` directory.
 Test results will be shown in the terminal and stored in the ```/test-results``` directory.
 The example testing showcase scenario would be: 
 1. ```bunx playwright test``` -> all tests should pass
 2. change one of the colors in the ```testCases.js``` file
 3. ```bunx playwright test``` -> see that the testcase fails in which the color was changed; see the test-results for detailed screenshot comparison
 4. ```bunx playwright test --update-snapshots``` -> update the stored snapshots
 5. ```bunx playwright test``` -> see that the test passes again with the new color;
This is only a schowcase scenarion, not the intended usecase. The intended use case of this visual test is to verify that the old/unchanged functionalities still work after making changes in the source code. To manually try out the test cases by hand, run ```bun tests/manualTest.js```
