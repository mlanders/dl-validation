module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ "**/test/unit/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  coveragePathIgnorePatterns:[
    '/node_modules/',
    '<rootDir>/dist'
  ],
  testPathIgnorePatterns:[
    "/node_modules/",
    '<rootDir>/dist'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/types/**/*.ts',
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
    },
  },
};