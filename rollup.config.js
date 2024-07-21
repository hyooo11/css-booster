import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.tsx",
  output: [
    {
      dir: "./dist",
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    {
      file: "./dist/index.es.js",
      format: "es",
    },
    {
      name: "css-booster",
      file: "./dist/index.umd.js",
      format: "umd",
    },
  ],
  plugins: [
    // 바벨 트랜스파일러 설정
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    peerDepsExternal(),
    commonjs({ include: "node_modules/**" }),
    // 타입스크립트
    typescript(),
  ],
  external: ["react", "react-dom"],
};
