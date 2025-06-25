import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  transformIgnorePatterns: [
    "/node_modules/(?!(@arcgis|@esri)/)"
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['@testing-library/jest-dom', "./jest.setup.ts"],
};

export default config;