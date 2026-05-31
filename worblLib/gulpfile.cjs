const { src, dest } = require("gulp");


exports.default = async function () {
    src([
        "./dist/c/worbl/**/*.*"        
    ],
        { base: "./dist/c" }).pipe(dest("../werbelBasicApp/src/libs"));

    src([
        "./dist/p/worbl/**/*.*"        
    ],
        { base: "./dist/p" }).pipe(dest("../werblEsBuild/src/libs")).pipe(dest("../werblEsBuildInline/src/libs"));



};
