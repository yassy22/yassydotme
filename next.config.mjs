import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|mov|avi|mkv)$/, // Zorgt ervoor dat video-extensies worden verwerkt
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]", // Output naar de juiste map
      },
    });

    return config;
  },
  output: "export", // Enables static export
  images: { unoptimized: true }, // Required for static export
  // basePath: "/out", // Adds 'out' at the beginning of every URL
  trailingSlash: true, // Optional: ensures all paths end with a slash
};

export default (phase) => ({
  ...nextConfig,
  // Keep development routing and cache separate from the static production export.
  ...(phase === PHASE_DEVELOPMENT_SERVER
    ? { output: undefined, distDir: ".next-dev" }
    : {}),
});
