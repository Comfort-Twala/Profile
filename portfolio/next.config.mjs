/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true,
    images: {
        domains: [
            'assets.aceternity.com',
            'images.unsplash.com',
            'avatars.githubusercontent.com'
        ],
    },
};

export default nextConfig;