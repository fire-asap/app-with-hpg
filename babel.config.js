export default {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    [
      '@babel/preset-react',
      // { runtime: "automatic", importSource: "@emotion/react" },
    ],
  ],
  // plugins: ["@emotion/babel-plugin", "@babel/plugin-transform-runtime"],
  plugins: ['@babel/plugin-transform-runtime'],
};
