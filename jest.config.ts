import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^braintrust-sdk-kotlin$': '<rootDir>/src/index.ts',
    '^braintrust-sdk-kotlin/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^braintrust-sdk-kotlin/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
