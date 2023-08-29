/* eslint-disable */
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-ca-central-1.hygraph.com/v2/cllplu3dx1hud01unfs6p0wvm/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
