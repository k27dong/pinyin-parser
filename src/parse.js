;(function () {
  parse = function (message, options = 0) {
    const TONE = require("./const").TONE,
      INITIAL = require("./const").INITIAL,
      FINAL = require("./const").FINAL

    const set_char = (str, index, char) => {
      return str.substring(0, index) + char + str.substring(index + 1)
    }

    let msg_arr = message.toLowerCase().trim().split(/\s+/)
    let result = []

    for (let i of msg_arr) {
      let tone = 0
      let initial = ""
      let final = ""

      // get tone
      for (let j = 0; j < i.length; j++) {
        let curr_char = i[j]
        if (TONE.includes(curr_char)) {
          tone = (TONE.indexOf(curr_char) % 4) + 1

          // remove tone from string
          switch (curr_char) {
            case "ā":
            case "á":
            case "ǎ":
            case "à":
              i = set_char(i, j, "a")
              break
            case "ō":
            case "ó":
            case "ǒ":
            case "ò":
              i = set_char(i, j, "o")
              break
            case "ē":
            case "é":
            case "ě":
            case "è":
              i = set_char(i, j, "e")
              break
            case "ī":
            case "í":
            case "ǐ":
            case "ì":
              i = set_char(i, j, "i")
              break
            case "ū":
            case "ú":
            case "ǔ":
            case "ù":
              i = set_char(i, j, "u")
              break
            case "ǖ":
            case "ǘ":
            case "ǚ":
            case "ǜ":
              i = set_char(i, j, "ü")
              break
          }
        }
      }

      // get initial and final
      for (let fin of FINAL) {
        if (i === fin) {
          initial = ""
          final = fin
        } else {
          for (let init of INITIAL) {
            if (init + fin === i) {
              initial = init
              final = fin
            }
          }
        }
      }

      if (initial == "" && final == "") {
        throw new Error(`Invalid pinyin: ${i}`)
      }

      result.push({
        initial: initial,
        final: final,
        tone: tone,
      })
    }

    return result
  }

  module.exports = function (message, options = 0) {
    if (!(typeof message === "string" || message instanceof String)) {
      throw new Error(`Illegal argument: message must be a string, got ${typeof message} (${message})`)
    }

    return parse(message, options)
  }
})()
