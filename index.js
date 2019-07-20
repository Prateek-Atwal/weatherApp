#!/usr/bin/env node
var minimist = require("minimist");
var args = process.argv.slice(2);
var miniargs = minimist(args);
var cmd;
if (miniargs._[0]) {
  cmd = miniargs._[0];
} else {
  cmd = "help";
}
// console.log(miniargs);
if (miniargs.h || miniargs.help) {
    cmd = "help";
}
if (miniargs.v || miniargs.version) {
    cmd = "version";
}
switch (cmd) {
    case "help":
        require("./commands/help.js")();
        break;
    case "version":
        require("./commands/version.js")();
        break;
    case "today":
        require("./commands/today.js")(miniargs);
        break;
    case "forecast":
        require("./commands/forecast.js")(miniargs);
        break;
    default:
        console.log("Wrong command. Please enter correct input");
        break;
}