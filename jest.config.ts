import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@angular|@arcgis|@esri|@stencil|@popperjs)/)"
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

export default config;