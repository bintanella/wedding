const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";

  const isReact = false;
  const isVue = !isReact;

  // console.log('_env', _env)
  // console.log('argv', argv)

  return {
    entry: {
      main: `./src/index-vue.js`,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash:8].js",
      chunkFilename: "[name].[contenthash:8].js",
      sourceMapFilename: "[name].[contenthash:8].js.map",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true, //
              cacheCompression: false, //
              envName: isProduction ? "production" : "development", //
              presets: isVue ?
                [
                  [ "@babel/preset-env", { useBuiltIns: "usage", corejs: 3 } ],
                ] :
                [
                  [ "@babel/preset-env", { modules: false } ],
                  "@babel/preset-react"
                ],
              plugins: isVue ?
                null :
                [
                  "@babel/plugin-transform-runtime",
                  "@babel/plugin-syntax-dynamic-import",
                  "@babel/plugin-proposal-class-properties"
                ],
              env: isVue ?
                undefined :
                {
                  production: {
                    only: ["src"],
                    plugins: [
                      [ "transform-react-remove-prop-types", { removeImport: true } ],
                      "@babel/plugin-transform-react-inline-elements",
                      "@babel/plugin-transform-react-constant-elements"
                    ],
                  },
                },
            },
          },
        },
        isVue ?
          {
            test: /\.vue$/,
            loader: "vue-loader",
          } :
          null,
        {
          test: /\.s?css$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { importLoaders: 1 },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-preset-env",
                    ],
                  ],
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
          loader: "file-loader",
        },
        {
          test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
          loader: "file-loader",
          options: {
            name: "[name][contenthash:8].[ext]",
            outputPath: "assets/img",
            esModule: false,
          },
        },
      ].filter(Boolean),
    },
    plugins: [
      isVue ? new VueLoaderPlugin() : null,
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:8].css",
        chunkFilename: "[name].[contenthash:8].css",
      }),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
      }),
      new BaseHrefWebpackPlugin({ baseHref: '/' }),
    ].filter(Boolean),
    resolve: isVue ?
      {
        alias: {
          '@': path.resolve(__dirname, "./src"),
          vue$: "vue/dist/vue.runtime.esm.js",
        },
        extensions: ["*", ".js", ".vue", ".json"],
      } :
      {
        alias: {
          '@': path.resolve(__dirname, "./src"),
        },
        extensions: [".js", ".jsx"]
      },
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -10,
            chunks: "all",
          },
        },
      },
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    devtool: "source-map",
  };
};