/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["images.unsplash.com",
      "source.unsplash.com",
      "randomuser.me",
      "images.pexels.com",
      "images.unsplash.com",
      "icon-library.com",],
  },
  async redirects() {
    return [

      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
