var uglifycss = require('uglifycss');

var uglified = uglifycss.processFiles(
    ['src/styles.css'], { maxLineLen: 500, expandVars: true });

console.log(uglified);



