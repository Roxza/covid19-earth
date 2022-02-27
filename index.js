const cheerio = require("cheerio");
const axios = require("axios");

exports.covid19 = () =>
  axios.get("https://www.worldometers.info/coronavirus").then((response) => {
    let veri = [];
    const $ = cheerio.load(response.data);
    const table = $("#main_table_countries_today");
    const tbodies = table.find("tbody");
    const tbody_countries = tbodies[0];
    const table_rows_countries = $(tbody_countries).find("tr").toArray();
    table_rows_countries.forEach((row) => {
      const columns = $(row).find("td");
      rank = parseInt($(columns[0]).text().replace(/[,+]/g, "")) || 0;
      country = $(columns[1]).text().trim().toUpperCase();
      totalCases = parseInt($(columns[2]).text().replace(/[,+]/g, "")) || 0;
      newCases = parseInt($(columns[3]).text().replace(/[,+]/g, "")) || 0;
      totalDeaths = parseInt($(columns[4]).text().replace(/[,+]/g, "")) || 0;
      newDeaths = parseInt($(columns[5]).text().replace(/[,+]/g, "")) || 0;
      totalRecovered = parseInt($(columns[6]).text().replace(/[,+]/g, "")) || 0;
      activeCases = parseInt($(columns[8]).text().replace(/[,+]/g, "")) || 0;
      criticalCase = parseInt($(columns[9]).text().replace(/[,+]/g, "")) || 0;
      totalTests = parseInt($(columns[12]).text().replace(/[,+]/g, "")) || 0;
      veri.push({
        rank,
        country,
        totalCases,
        newCases,
        totalDeaths,
        newDeaths,
        totalRecovered,
        activeCases,
        criticalCase,
        totalTests,
      });
    });
    return veri;
  });

exports.country = (country) => {
  return this.covid19().then((stats) => {
    return stats.find((entry) => entry.country == country.toUpperCase());
  });
};
