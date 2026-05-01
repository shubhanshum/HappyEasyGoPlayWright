module.exports = {
  default: {
    require: [
      'specs/**/*.js',   // step definitions
      'utils/**/*.js'    // hooks + world
    ],
    timeout: 70000
  }
};