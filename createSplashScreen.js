#!/usr/bin/env node
var xml2js = require('xml2js');
var fs = require('fs');
var shell = require('shelljs');
var interpolate = require('interpolate');

// TODO change static paths to cli argument
// var argv = require('minimist')(process.argv.slice(2))
var CONFIG_PATH = 'app/config.xml';
var SPLASHSCREEN_PATH = 'app/resources/splashscreen.svg'

var STRING_TEMPLATE = 'inkscape --export-area={x0}:{y0}:{x1}:{y1} --export-png=www/{output} --export-height={height} {raw}'; 

console.log('starting splashscreen generation');

// get normalised image configs
var configs = require('./readConfig')(CONFIG_PATH);


var parser = new xml2js.Parser();
var raw = fs.readFileSync(SPLASHSCREEN_PATH)
parser.parseString(raw, function (err, result) {
    var width = result.svg.$.width;
    var heigh = result.svg.$.height;

    configs.forEach(function (item) {
        var str = interpolate(STRING_TEMPLATE, {
            x0: 0,
            y0: 0,
            x1: item.width* 400/ item.height,
            y1: 400,
            height: item.height,
            output: item.src,
            raw: SPLASHSCREEN_PATH
        });
        shell.exec(str)
    });
});

// console.log(shell.exec('inkscape --export-area=0:0:200:400 --export-png=hello.png ' + SPLASHSCREEN_PATH));