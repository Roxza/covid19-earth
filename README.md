<h1 align="center">Covid 19 Stats</h1>
<h6 align="center">Developed with ❤️ by Roxza#2999(Discord)</h6>

# Covid 19

- Shows cases in the world and countries.

> Packages used : axios,cheerio

> Data : [Data Website](https://www.worldometers.info/coronavirus)

And of course covid19 api itself is open source with a [public repository](https://github.com/RRoxza/covid19-earth)
on GitHub.

# 📦Installation

```console
npm i covid19-earth --save
yarn add covid19-earth
```

# 📝 Usage

```js
const corona = require("covid19-earth");
let stats = await corona.covid19(); // Global Data

let stats = await corona.country("World"); // World Data
let stats = await corona.country("Turkey"); // Country Data
```

# License

MIT
