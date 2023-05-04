/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    experimental: {
        appDir: false,
    },
    i18n: {
        locales: ['en', 'vi'],
        defaultLocale: 'vi',
    },
    webpack: (config) => {
        config.module.rules.forEach((rule) => {
            const { oneOf } = rule;
            if (oneOf) {
                oneOf.forEach((one) => {
                    if (!`${one.issuer?.and}`.includes('_app')) return;
                    one.issuer.and = [path.resolve(__dirname)];
                });
            }
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.us-west-2.amazonaws.com'
            },
        ],
    },
};

module.exports = nextConfig;
