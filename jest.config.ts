module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/coverage/**',
    '!<rootDir>/src/integrations/**',
    '!<rootDir>/src/database/migrations/**'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/',
    '<rootDir>/src/database/migrations/'
  ],
  coveragePathIgnorePatterns: [
    '.module.ts$',
    'main.ts$',
    'config.ts$',
    '.middleware.ts$',
    'getLogLevels.ts$',
    'header.interface.ts$',
    'response.interface.ts$',
    'error.interface.ts$',
    'sh.util.ts$',
    'page.dto.ts$',
    'availableExperience.entity.ts$',
    'productRequestOrder.entity.ts$',
    'optin.entity.ts$'
  ],
  testResultsProcessor: 'jest-sonar-reporter'
};
