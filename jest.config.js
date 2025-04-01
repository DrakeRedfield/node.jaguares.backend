/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  "testMatch": [
    "<rootDir>/src/test/**/*.test.ts",
  ],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};