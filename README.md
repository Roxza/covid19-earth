
[![DeepScan grade](https://deepscan.io/api/teams/17008/projects/20328/branches/552113/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=17008&pid=20328&bid=552113)
[![NPM info](https://img.shields.io/npm/dt/covid19-earth?color=39F4B6)](https://www.npmjs.com/package/covid19-earth)
[![GitHub stars](https://img.shields.io/github/stars/roxza/covid19-earth?color=888BFF)](https://github.com/roxza/covid19-earth/stargazers)
[![GitHub issues](https://img.shields.io/github/issues-raw/roxza/covid19-earth)](https://github.com/roxza/covid19-earth/issues)

[![NPM Info](https://nodei.co/npm/covid19-earth.png?downloads=true&stars=true)](https://www.npmjs.com/package/covid19-earth)

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
