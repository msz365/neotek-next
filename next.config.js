const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");

// module.exports = withVideos();
// // module.exports = {
// //   reactStrictMode: true,
// // }
// module.exports = {
//   images: {
//     domains: ["media.graphcms.com"],
//     minimumCacheTTL: 60,
//   },
// };

// next.config.js

// Omitting requires for simplicity

module.exports = withPlugins(
  [withVideos], // All next plugins go here
  // Below is the main Next.js config object
  {
    images: {
      domains: ["media.graphcms.com"],
    },
  }
);
