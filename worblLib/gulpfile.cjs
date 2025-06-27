const { src, dest } = require("gulp");


exports.default = async function () {
    src([
        "./libs/**/*.*"        
    ],
        { base: "./libs" }).pipe(dest("../werbelBasicApp/src/libs")).pipe(dest("../werbelWebpack/src/libs"));
};
