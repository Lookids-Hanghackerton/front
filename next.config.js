/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
<<<<<<< HEAD
    domains: ["source.unsplash.com", "picsum.photos", "kr.object.ncloudstorage.com", "encrypted-tbn2.gstatic.com"]
=======
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**"
      }, {
        protocol: "https",
        hostname: "**"
      }
    ]
>>>>>>> 9487e35 (chore : nextConfig image domain 모든 도메인 오픈)
  }
};

module.exports = nextConfig;
