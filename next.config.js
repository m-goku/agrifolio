/** @type {import('next').NextConfig} */
module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://192.168.0.129:3001/:path*', // Proxy to backend
            },
        ];
    },
}
