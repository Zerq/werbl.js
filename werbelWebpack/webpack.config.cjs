const path = require('path');
const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: './src/entry.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
  
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    extensionAlias: { 
      ".js": [".js", ".ts", ".tsx"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
  },
  output: {
    filename: 'entry.js',
    path: path.resolve(__dirname, 'wwwroot')
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
    config.devtool= 'source-map';
  }
  return config;
};
