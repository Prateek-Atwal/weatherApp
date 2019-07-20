#!/usr/bin/env node
const fs = require("./../package.json");
module.exports = function () {
    console.log(fs["version"]);
}