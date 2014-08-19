var fs = require('fs');
var xml2js = require('xml2js');
var extend = require('xtend');

var ANDROID = {
    "port-ldpi": {width: 200, height: 320},
    "port-mdpi": {width: 320, height: 480},
    "port-hdpi": {width: 480, height: 800},
    "port-xhdpi": {width: 720, height: 1280}
}

var parser = new xml2js.Parser();

module.exports = function () {

    var data = fs.readFileSync(__dirname + '/app/config.xml');

    var normOptions = []
    parser.parseString(data, function (err, result) {
        result.widget['gap:splash'].forEach(function(item){
            var src = item.$['src'];
            var platform = item.$['gap:platform'];
            var width = item.$.width;
            var height = item.$.height;
            if (platform === 'blackberry') {
                normOptions.push({src: src, width: 225, height: 225});
                return;
            }
            if (platform === 'winphone') {
                normOptions.push({src: src, width: 480, height: 800});
                return;
            }
            if (platform === 'android') {
                var dim = ANDROID[item.$['gap:qualifier']];
                normOptions.push(extend(dim, {src: src}));
                return;
            }
            if (platform === 'ios') {
                normOptions.push({src: src, width: width, height: height});
                return;
            }
        });
    });
    return normOptions;
};