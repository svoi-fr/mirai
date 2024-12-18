/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  output: 'standalone',
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "./normalize.scss";`,
    prependData: `@import "./colors.scss";`,
}
};

module.exports = nextConfig;
