/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true,
    images: {
        domains: [
            'assets.aceternity.com',
            'images.unsplash.com',
            'avatars.githubusercontent.com',
            'api.microlink.io',
            'www.uct.ac.za'
        ],
    },
};

export default nextConfig;