module.exports = {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/tests/src/**/*.+(ts|tsx)',
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  collectCoverageFrom: ["src/**/*.ts"],
  modulePaths: [
    "node_modules",
    "src"
  ]
};
