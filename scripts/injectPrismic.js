// scripts/injectPrismic.js
// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');
const path = require('path');

const sourceFile = path.join(__dirname, './gatsby-node.js');

fs.copySync(
  sourceFile,
  path.join(__dirname, '../node_modules/gatsby-source-prismic-graphql/third-party/gatsby-node.js'),
);

fs.copySync(
  sourceFile,
  path.join(
    __dirname,
    '../node_modules/gatsby-source-graphql-universal/third-party/gatsby-node.js',
  ),
);