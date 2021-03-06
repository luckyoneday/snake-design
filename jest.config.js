module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      lines: 80,
      functions: 80
    }
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}
