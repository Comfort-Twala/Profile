/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true,
    images: {
        domains: [
            'assets.aceternity.com',
            'images.unsplash.com'
        ],
    },
};

export default nextConfig;