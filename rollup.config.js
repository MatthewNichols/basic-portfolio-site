import merge from "deepmerge";
import { createBasicConfig } from "@open-wc/building-rollup";

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './client-side-compiled/index.js',
  output: {
    dir: null,
    file: '_site/scripts/index.bundled.js'
  }
})