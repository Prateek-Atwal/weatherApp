#!/usr/bin/env node
const axios = require("axios");
const chalk = require("chalk");
const ora = require("ora");
const getWeather = require("../utility/weather");
const getLocation = require("../utility/location");
module.exports = async function forecast(miniargs) {
    var spinner = ora(chalk.yellow("LOADING!!"));
    spinner.start();
    var loc = miniargs.l || miniargs / location || await getLocation();
    var dataObj = await getWeather(loc);
    spinner.stop();
    console.log(chalk.cyan("\nForecast for " + loc + "\n"));
    dataObj.forEach(function (el) {
        console.log("\t" + chalk.cyan(el["applicable_date"] + " - Low: " + Math.ceil(el["min_temp"]) + "*C | High: " + Math.ceil(dataObj[0]["max_temp"]) + "*C | " + dataObj[0]["weather_state_name"]));
    });
}