/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: "/instructions",
                destination: "/instructions/pull-ups/level-1",
                permanent: true,
            },
            {
                source: "/instructions/pull-ups",
                destination: "/instructions/pull-ups/level-1",
                permanent: true,
            },
            {
                source: "/instructions/push-ups",
                destination: "/instructions/push-ups/level-1",
                permanent: true,
            },
            {
                source: "/instructions/squats",
                destination: "/instructions/squats/level-1",
                permanent: true,
            },
            {
                source: "/instructions/handstands",
                destination: "/instructions/handstands/level-1",
                permanent: true,
            },
            {
                source: "/instructions/leg-raises",
                destination: "/instructions/leg-raises/level-1",
                permanent: true,
            },
            {
                source: "/instructions/bridges",
                destination: "/instructions/bridges/level-1",
                permanent: true,
            },
        ]
    },
    experimental: {
        serverComponentsExternalPackages: ["pino"],
    },
}

export default nextConfig
