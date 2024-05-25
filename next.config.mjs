// import CopyPlugin from "copy-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "images.unsplash.com",
      // },
    ],
  },

  // webpack: (
  //   config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  // ) => {
  //   config.plugins.push(
  //     new CopyPlugin({
  //       patterns: [
  //         {
  //           from: "./node_modules/swiper/swiper-bundle.min.js",
  //           to: "./public/lib/swiper/",
  //         },
  //       ],
  //     })
  //   );
  //   return config;
  // },
};

export default nextConfig;
