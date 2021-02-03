const { name } = require('./package.json')

module.exports = {
  displayName: name,
  name,
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '/*.d.ts/'],
  transform: {
    '.(js|jsx|ts|tsx)': 'babel-jest'
  },
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts', '!**/I[A-Z]*.{ts}', '!**/*d*.{ts}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'setup*.js', '/__tests__/', '/*.d.ts/'],
  coverageReporters: ['text', 'lcov'],
  setupFilesAfterEnv: ['./setupTest.js'],
  clearMocks: true,
  preset: 'ts-jest/presets/js-with-ts',
  setupFiles: ['dotenv/config']
}
