// this code takes screenshots for every test case and compares them to older screenshots in the "tests/compareToReference.js-snapshots" directory.
// test results will be shown in the terminal and stored in the /test-results directory.
// the example testing showcase scenario would be: 
// 0. run ```npx playwright install``` 
// 1. ```npm run test``` -> all tests should pass
// 2. change one of the colors in the testCases.js file
// 3. ```npm run test``` -> see that the testcase fails in which the color was changed; see the test-results for detailed screenshot comparison
// 4. ```npm run test --update-snapshots``` -> update the stored snapshots
// 5. ```npm run test``` -> see that the test passes again with the new color;
// of course, in this is only a schowcase scenarion, not the inteded usecase. The inteded use case of this visual test was to verify after making changes in the source code that the old/unchanged functionalities still work.

import { test, expect } from '@playwright/test';
import { testCases, defaultLightSizeEnterTime, defaultLightSizeLeaveTime } from './TestCases.js';

for (const testId of Object.keys(testCases)) {
  test(`Test ${testId}`, async ({ page }) => {
    const testCase = testCases[testId];
    
    await page.goto('/');
    
    const buttonElement = await page.locator(`[data-testid="${testId}"]`);
    await buttonElement.scrollIntoViewIfNeeded();
    
    const boundingBox = await buttonElement.boundingBox();
    
    const padding = 20;
    const clip = {
      x: boundingBox.x - padding,
      y: boundingBox.y - padding,
      width: boundingBox.width + (padding * 2),
      height: boundingBox.height + (padding * 2)
    };
    
    await page.hover(`[data-testid="${testId}"]`);
    
    await page.waitForTimeout(defaultLightSizeEnterTime);
    
    await expect(page).toHaveScreenshot(`${testId}-hover.png`, { clip });
    
    // for burst test
    if (testCase.enableBurst) {
      await page.mouse.down();
      await page.waitForTimeout(100);
      await expect(page).toHaveScreenshot(`${testId}-mousedown.png`, { clip });
      await page.mouse.up();
    }
    
    await page.mouse.move(0, 0);
    
    // for custom static bg test
    if (testId === 'test6') {
      await page.waitForTimeout(defaultLightSizeLeaveTime);
      await expect(page).toHaveScreenshot(`${testId}-after.png`, { clip });
    }
    
    await page.waitForTimeout(defaultLightSizeLeaveTime);
  });
}