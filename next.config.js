/** @type {import('next').NextConfig} */
const withImages = require('next-images')

module.exports = [{
    reactStrictMode: true,
    images: {
        disableStaticImages: true,
    },
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.node = {
                fs: 'empty',
                net: 'empty',
                els: 'empty',
                "fs-extra": 'empty'
            }
        }
        return config
    }
}, withImages()];
