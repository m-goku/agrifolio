const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

/** @type {import('next').NextConfig} */
module.exports = withFlowbiteReact({
  images: {
    domains: ["res.cloudinary.com"], // Add Cloudinary domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
  // async rewrites() {
  //     return [
  //         {
  //             source: '/api/:path*',
  //             destination: 'http://192.168.0.129:3001/:path*', // Proxy to backend
  //         },
  //     ];
  // },
});
