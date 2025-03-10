const { src, dest } = require("gulp");


exports.default = async function () {
    src([
        "./lib/**/*.*"        
    ],
        { base: "./lib" }).pipe(dest("../werbelBasicApp/src/libs")).pipe(dest("../werbelWebpack/src/libs"));
};
