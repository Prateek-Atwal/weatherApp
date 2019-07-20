#!/usr/bin/env node
const axios = require("axios");
const ora = require("ora");
const chalk = require("chalk");
const getLocation = require("../utility/location");
const getWeather = require("../utility/weather");
module.exports = async function today(miniargs) {
    var spinner = ora(chalk.yellow("LOADING!!"));
    spinner.start();
    var loc = miniargs.l || miniargs.location || await getLocation();
    var dataObj = await getWeather(loc);
    spinner.stop();
    console.log(chalk.cyan("\n\tCurrent conditions in " + loc));
    console.log(chalk.cyan(("\t" + Math.ceil(dataObj[0]["the_temp"]) + "*C  " + dataObj[0]["weather_state_name"])));
}