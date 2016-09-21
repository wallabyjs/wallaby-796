module.exports = function (wallaby) {
  return {
    files: ['*List.js'],
    tests: ['*Test.js'],
    testFramework: 'jasmine',
    env: {
      type: 'node'
    },
    debug: true
  };
};