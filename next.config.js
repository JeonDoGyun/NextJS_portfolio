/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.notion.so" },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        pathname:
          "85f1ec30-9956-4a9f-8f40-a53cc51caba1/116f581c-d7f1-4f23-9e58-340a46dd0c87/Untitled.png",
      },

      { protocol: "https", hostname: "user-images.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
