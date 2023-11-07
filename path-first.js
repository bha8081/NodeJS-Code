 const path = require("path");
console.log(path.sep);

// console.log(process.env.PATH);

// console.log(path.delimiter);

/* check current file path */
const currentFilePath = __filename;
console.log('currentFilePath :-' ,currentFilePath);

/*chek dirctry name */
console.log('dirname :-' ,__dirname);

/* check base name of current file */
let basename = path.basename(currentFilePath);
console.log('basename :-', basename);

/* check extension of file. */
let extension = path.extname(currentFilePath);
console.log('extension :-' ,extension);

/* check file name withOut extension(.js, .html etc) */

let withOutExtensionName = path.basename(currentFilePath, '.js');
console.log('withOutExtensionName :-' ,withOutExtensionName);

/* path without base. */
const dirname = path.dirname(currentFilePath);
console.log('dirname :-', dirname);

/* check directly extension. */
console.log('extension 1:- ', path.extname(currentFilePath));
console.log('extension 2 :- ', path.extname('index.md.js'));

/* Combine the dir and base */
let pathToFile = path.format({
    dir: 'F:\\public\\nodeJs\\path-module',
    base: 'path-first.js'
});
console.log('pathToFile :- ' ,pathToFile);

/* Absolute and Relative Path. */
console.log('IsAsolute_Path :- ', path.isAbsolute(currentFilePath));
console.log('IsAsolute_Path :- ', path.isAbsolute('\\path-first.js'));
console.log('IsAsolute_Path :- ', path.isAbsolute('.\\path-first.js'));
console.log('IsAsolute_Path :- ', path.isAbsolute('..\\path-first.js'));
console.log('IsAsolute_Path :- ', path.isAbsolute('\\my-esm-lib'));

/* Combine multiple path and create one path. */
const multiplePathToOnePath = path.join('\\home', 'bhav', 'nodejs', 'index.js');
console.log('multiplePathToOnePath :- ' ,multiplePathToOnePath);

/* parse method are give file in separet from */
console.log('parse :- ', path.parse(currentFilePath));

/*check the relative path given two path */
console.log('relative path :- ', path.relative('\\home\\user\\config', '\\home\\user\\js'));

/* it is same work like directry command. */
console.log('resolve :-', path.resolve());

/*normalize use to normal from data */
console.log('normalize :- ', path.normalize('\\\home\\user/bhav'));