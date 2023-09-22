/*
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 9 19th 2023, 10:22:32 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import type { StorybookConfig } from "@storybook/react-webpack5";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import path from 'path';

console.log(__dirname, path.resolve(__dirname, '../tsconfig.json'));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/addon-viewport",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: 'Document-[name]',
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          ...(config.resolve?.plugins || []),
          new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') }),
        ],
        alias: {
          ...(config.resolve?.alias || {}),
          "@themes": path.resolve(__dirname, '../src/themes/index'),
        },
      },
    };
  },
};
export default config;
// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-scss"
//   ],
//   "core": {
//     "builder": "webpack5"
//   }
// }
