export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "jest-puppeteer",
  testMatch: ["**/tests/**/*.test.[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
