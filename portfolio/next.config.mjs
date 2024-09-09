/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react'] }
            }
        )
        return cfg
    }
};

export default nextConfig;
