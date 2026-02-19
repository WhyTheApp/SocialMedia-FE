import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";
import Configuration = webpack.Configuration;

// Polyfill Node.js 25+ broken localStorage
if (typeof localStorage !== "undefined") {
    try {
        if (typeof localStorage.getItem === "undefined") {
            Object.defineProperty(global, 'localStorage', {
                value: {
                    getItem: () => null,
                    setItem: () => { },
                    removeItem: () => { },
                    clear: () => { },
                    length: 0,
                    key: () => null,
                },
                writable: true,
                configurable: true
            });
        }
    } catch (e) {
        console.error("Failed to patch localStorage:", e);
    }
}

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
    },
    webpack(config: Configuration) {
        config.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;
