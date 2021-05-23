module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss|svg|ttf|jpeg|jpg|png)$': '<rootDir>/styleMock.js',
  },
};
