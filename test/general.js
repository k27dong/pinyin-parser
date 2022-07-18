const parser = require("../src/parse.js")
var expect = require("chai").expect

describe("parsing with the correct length", () => {
  it("should return with length 1", () => {
    const message = "a"

    expect(parser(message)).to.have.length(1)
  })

  it("should return with length 2", () => {
    const message = "  yuán   suī  "

    expect(parser(message)).to.have.length(2)
  })

  it("should return with length 28", () => {
    const message =
      "shì yè yī fù yán wén yǒu yī míng yòu xí rú sān cì yīng xiāng shì bù zhōng shī shì gù rì yán dú shū shí nián"

    expect(parser(message)).to.have.length(28)
  })
})

describe("parsing with the correct tone", () => {
  it("should return with tone 1", () => {
    const message = "ā"

    expect(parser(message)).to.have.deep.equal([
      {
        initial: "",
        final: "a",
        tone: 1,
      },
    ])
  })

  it("should return with tone 2", () => {
    const message = "é"

    expect(parser(message)).to.have.deep.equal([
      {
        initial: "",
        final: "e",
        tone: 2,
      },
    ])
  })

  it("should return with tone 3", () => {
    const message = "ǒ"

    expect(parser(message)).to.have.deep.equal([
      {
        initial: "",
        final: "o",
        tone: 3,
      },
    ])
  })

  it("should return with tone 4", () => {
    const message = "yǜ"

    expect(parser(message)).to.have.deep.equal([
      {
        initial: "y",
        final: "ü",
        tone: 4,
      },
    ])
  })
})

describe("parsing with the correct initial and final", () => {
  it("should return with zi3su1", () => {
    const message = "zǐ sū"

    expect(parser(message)).to.have.deep.equal([
      {
        initial: "z",
        final: "i",
        tone: 3,
      },
      {
        initial: "s",
        final: "u",
        tone: 1,
      },
    ])
  })

  it("should return with ban3lan2gen1", () => {
    const message = "bǎn lán gēn"

    expect(parser(message)).to.have.deep.equal([
      {
        initial: "b",
        final: "an",
        tone: 3,
      },
      {
        initial: "l",
        final: "an",
        tone: 2,
      },
      {
        initial: "g",
        final: "en",
        tone: 1,
      },
    ])
  })

  it("should return with hua1rui3shi2", () => {
    const message = "  Huā Ruǐ Shí  "

    expect(parser(message)).to.have.deep.equal([
      {
        initial: "h",
        final: "ua",
        tone: 1,
      },
      {
        initial: "r",
        final: "ui",
        tone: 3,
      },
      {
        initial: "sh",
        final: "i",
        tone: 2,
      },
    ])
  })
})

describe("parsing with illegal input arguments", () => {
  it("should return error because input is not a string", () => {
    const message = 123

    expect(() => parser(message)).to.throw(Error)
  })

  it("should return error because pinyin is invalid", () => {
    const message = "pípáyè"

    expect(() => parser(message)).to.throw(Error)
  })
})
