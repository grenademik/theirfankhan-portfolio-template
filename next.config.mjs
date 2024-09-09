/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "aceternity.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "plus.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "himalayancreatives.com",
                port: "",
                pathname: "/**",
            },
        
        ]
    }
};

export default nextConfig;
