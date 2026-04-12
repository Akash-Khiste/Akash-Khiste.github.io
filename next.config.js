const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/AkashKhiste.github.io" : "",
  assetPrefix: isProd ? "/AkashKhiste.github.io/" : "",
};

module.exports = nextConfig;
