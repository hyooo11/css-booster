import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.tsx",
  output: {
    file: "./dist/index.js",
    format: "es",
    sourcemap: true,
  },
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
    postcss({
      extract: false, // Separate CSS file extraction
      modules: true,
      use: ["sass"], // Optional: if you're using Sass
    }),
    peerDepsExternal(),
    commonjs({ include: "node_modules/**" }),
    typescript(),
  ],
  external: ["react", "react-dom"],
};
