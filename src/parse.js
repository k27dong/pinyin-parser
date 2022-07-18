;(function () {
  parse = function (message, options = 0) {
    return "abc"
  }

  module.exports = function (message, options = 0) {
    return parse(message, options)
  }
})()
