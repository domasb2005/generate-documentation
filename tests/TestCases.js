// from the root directory, run ```bun tests/manualTest.js``` to try out the tests by hand

export const testCases = {
  test1: { lightColor: '#ff0000' },
  test2: { lightColor: '#ff0000', hoverBg: "rgba(0, 128, 255, 0.5)" },
  test3: { lightColor: '#ff0000', lightSize: 20 },
  test4: { lightColor: '#ff0000', enableBurst: true },
  test5: { lightColor: '#ff0000', mode: 'sharp' },
  test6: { lightColor: '#ff0000', customStaticBg: 'lime' },
  test7: { preset: 'transparent-purple' },
  test8: { preset: 'transparent-purple', disabled: true }
};

export const defaultLightSizeEnterTime = 100; //these time values were taken from package source code and should be updated whenever source code changes! 
export const defaultLightSizeLeaveTime = 50; // I know that this makes these tests less maintainable, but I thought manually searching the code with regex matching would be painfull and equally not maintainable.
// a maintainable solution would to add getDefaults() method to the package and use that, or have an AI API extract these values dynamically from the source code; It wouldn't be hard I think.