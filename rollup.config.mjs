/*
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 9 19th 2023, 9:55:59 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
// import postcss from "autoprefixer";
import { dts } from "rollup-plugin-dts";

import alias from "@rollup/plugin-alias";
import path from "path";

import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "getfly-ui",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          {
            find: "@themes",
            replacement: path.resolve(process.cwd(), "./src/themes"),
          },
        ],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({ minimize: false, inject: false }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts({ tsconfig: "./tsconfig.json" }),
    ],
    external: [/\.(css|less|scss)$/],
  },
];
