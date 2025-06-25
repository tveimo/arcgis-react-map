module.exports = function (api: any) {
  api.cache(true);
  return {
    presets: [
      ["@babel/preset-env", {targets: {node: "current"}}],
      "@babel/preset-typescript",
      "@babel/preset-react"
    ],
    plugins: ["@babel/plugin-transform-modules-commonjs"]
  };
};
