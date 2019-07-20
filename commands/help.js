#!/usr/bin/env node
const chalk = require("chalk");
module.exports = function () {
    console.log(chalk.cyan("\n\n"));
    console.log(chalk.cyan("\t Weather [command] <optional>[--l <followed by the cityname>\n<to find your area's weather don't provide optional arguement>]"));
    console.log(chalk.cyan("\ntoday ................ show weather for today"));
    console.log(chalk.cyan("forecast ..............  show 5-day weather forecast"));
    console.log(chalk.cyan("version ...............  show package version"));
    console.log(chalk.cyan("help ..................  show help menu for a command"));
}