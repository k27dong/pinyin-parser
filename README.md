## Pinyin-Parser

[![](https://badgen.net/npm/v/pinyin-parser)](http://kefan.me/rss.xml)
[![](https://badgen.net/npm/dt/pinyin-parser)](https://www.npmjs.com/package/pinyin-parser)
[![](https://badgen.net/npm/license/pinyin-parser)](https://www.npmjs.com/package/pinyin-parser)

a tiny parser for Pinyin

### Usage

```javascript
import parse from 'pinyin-parser'

console.log(parse("sì shuǐ liú nián"));

/** Output
[
  { initial: 's', final: 'i', tone: 4 },
  { initial: 'sh', final: 'ui', tone: 3 },
  { initial: 'l', final: 'iu', tone: 2 },
  { initial: 'n', final: 'ian', tone: 2 }
]
*/
```

### Install

```bash
npm i pinyin-parser
```

### Test
```bash
npm run test
```

### License
MIT