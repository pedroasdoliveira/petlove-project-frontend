import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: "./src",
});

const customJestConfig = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  setupFilesAfterEnv: [
    '<rootDir>/src/test/Setup.ts'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.tsx?$': ['ts-jest'],
  },
  moduleDirectories: ["node_modules", "<rootDir>/src/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);