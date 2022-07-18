const TONE = [
  "ā",
  "á",
  "ǎ",
  "à",
  "ō",
  "ó",
  "ǒ",
  "ò",
  "ē",
  "é",
  "ě",
  "è",
  "ī",
  "í",
  "ǐ",
  "ì",
  "ū",
  "ú",
  "ǔ",
  "ù",
  "ǖ",
  "ǘ",
  "ǚ",
  "ǜ",
]

const INITIAL = [
  "b",
  "p",
  "m",
  "f",
  "d",
  "t",
  "n",
  "l",
  "g",
  "k",
  "h",
  "j",
  "q",
  "x",
  "zh",
  "ch",
  "sh",
  "r",
  "z",
  "c",
  "s",
  "y",
  "w",
]

const FINAL = [
  "a",
  "ai",
  "an",
  "ang",
  "ao",
  "e",
  "ei",
  "en",
  "eng",
  "er",
  "i",
  "ia",
  "ian",
  "iang",
  "iao",
  "ie",
  "in",
  "ing",
  "iong",
  "iu",
  "o",
  "ong",
  "ou",
  "u",
  "ua",
  "uai",
  "uan",
  "uang",
  "ui",
  "un",
  "uo",
  "ü",
  "üe",
  "ue",
]

module.exports = {
  TONE: TONE,
  INITIAL: INITIAL,
  FINAL: FINAL,
}
