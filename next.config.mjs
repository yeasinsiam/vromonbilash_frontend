import CopyPlugin from "copy-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },

  // webpack: (
  //   config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  // ) => {
  //   config.plugins.push(
  //     new CopyPlugin({
  //       patterns: [
  //         // Swiper js
  //         {
  //           from: "./node_modules/swiper/swiper-bundle.min.js",
  //           to: "./../public/assets/js/",
  //         },
  //         // glightbox
  //         {
  //           from: "./node_modules/glightbox/dist/js/glightbox.min.js",
  //           to: "./../public/assets/js/",
  //         },
  //       ],
  //     })
  //   );
  //   return config;
  // },
};

export default nextConfig;
