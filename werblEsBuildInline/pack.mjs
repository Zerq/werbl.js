async function bld() {

    const { build } = await import("esbuild");
    const fs = await import("node:fs/promises");
    const result = await build({
        entryPoints: ["src/index.tsx"],
        sourcemap: "both",
        outfile: "wwwroot/bundle.js",
        bundle: true,
        plugins: []
    });

    let htmlFile = await (await fs.readFile("./src/index.html")).toString();
    const bundle = await (await fs.readFile("./wwwroot/bundle.js")).toString();
    htmlFile = htmlFile.replace("{{CODE_HERE}}", bundle);

    fs.writeFile("./wwwroot/index.html",htmlFile);
    fs.unlink("./wwwroot/bundle.js");

    return result;
};

(async () => {
    try {
        const res = await bld();
        console.log(JSON.stringify(res));
    } catch (err) {
        console.log(err);
    }
})();


