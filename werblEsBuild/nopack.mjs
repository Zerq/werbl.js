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
    await fs.copyFile("./src/noPack.html", "./wwwroot/index.html");

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

