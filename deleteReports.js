const fs = require("fs");
fs.rmdirSync("./cypress/reports", {recursive: true});
fs.rmdirSync("./allure-report", {recursive: true});
fs.rmdirSync("./allure-results", {recursive: true});