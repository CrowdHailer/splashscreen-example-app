#!/usr/bin/env node

var CONFIG_PATH = 'app/config.xml';
var SPLASHSCREEN_PATH = 'app/resources/splashscreen.svg'

console.log('starting splashscreen generation');
var argv = require('minimist')(process.argv.slice(2))
var xml2js = require('xml2js');
var fs = require('fs');
var shell = require('shelljs');

var parser = new xml2js.Parser();

var configs = fs.readFileSync(CONFIG_PATH);

var raw = fs.readFileSync(SPLASHSCREEN_PATH)
parser.parseString(raw, function (err, result) {
    var width = result.svg.$.width;
    var heigh = result.svg.$.height;
});

console.log(shell.exec('inkscape --export-area=0:0:200:400 --export-png=hello.png ' + SPLASHSCREEN_PATH));