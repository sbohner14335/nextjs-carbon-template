import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  // 1. Configure SASS to locate Carbon packages
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'node_modules')],
    silenceDeprecations: ['legacy-js-api'], // Optional: Suppress Dart Sass warnings common with Carbon
  },
  // 2. Optimization for heavy icon libraries (Optional but recommended)
  modularizeImports: {
    '@carbon/icons-react': {
      transform: '@carbon/icons-react/lib/{{member}}',
    },
  },
};

export default nextConfig;
