/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  reactStrictMode: true,
  images: {
	// here you can add the url's that you are planning 
   // to use inside your next/image.
    domains: ["media.wired.com/"],
  },
}

module.exports = nextConfig
