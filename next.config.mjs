/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: "/instructions",
                destination:
                    "/instructions/06d64c6a-4d31-435a-b415-782816c446fd/level-1",
                permanent: true,
            },
            {
                source: "/instructions/06d64c6a-4d31-435a-b415-782816c446fd",
                destination:
                    "/instructions/06d64c6a-4d31-435a-b415-782816c446fd/level-1",
                permanent: true,
            },
            {
                source: "/instructions/8e21abc2-3d10-43bf-8635-a8341cebba9e",
                destination:
                    "/instructions/8e21abc2-3d10-43bf-8635-a8341cebba9e/level-1",
                permanent: true,
            },
            {
                source: "/instructions/d0ed1640-1b24-432a-80ab-03ded1eaa1aa",
                destination:
                    "/instructions/d0ed1640-1b24-432a-80ab-03ded1eaa1aa/level-1",
                permanent: true,
            },
            {
                source: "/instructions/3c93b151-0646-409f-bd81-1bd39944cad8",
                destination:
                    "/instructions/3c93b151-0646-409f-bd81-1bd39944cad8/level-1",
                permanent: true,
            },
            {
                source: "/instructions/8d67a779-ba3b-4643-a7f8-4ea021cc6615",
                destination:
                    "/instructions/8d67a779-ba3b-4643-a7f8-4ea021cc6615/level-1",
                permanent: true,
            },
            {
                source: "/instructions/316b2f69-1a2f-4611-8891-bfa754e1b2c5",
                destination:
                    "/instructions/316b2f69-1a2f-4611-8891-bfa754e1b2c5/level-1",
                permanent: true,
            },
        ]
    },
    images: {
        domains: ["cdn.sanity.io"],
    },
    experimental: {
        serverComponentsExternalPackages: ["pino"],
    },
}

export default nextConfig
