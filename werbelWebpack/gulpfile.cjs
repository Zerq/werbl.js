const { src, dest } = require("gulp");
const newer = require("gulp-newer");

exports.default = async function () {

    src([
        "./src/**/*.html",
        "./src/**/*.css",
        "./src/**/*.txt",
         
    ],
        { base: "./src" }).pipe(dest("wwwroot/"));
};