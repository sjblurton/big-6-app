"use client"

import "../styles/base/reset.scss"
import "../styles/base/global.scss"
import "../styles/main.scss"

import { Inter } from "next/font/google"

import Navbar from "@/modules/components/ui/Navbar/Navbar"
import Providers from "@/modules/components/Providers/Providers"

const inter = Inter({ subsets: ["latin"] })

const routes = [
    { name: "Home", path: "/" },
    { name: "instructions", path: "/instructions/pull-ups/level-1" },
    { name: "Stopwatch", path: "/stopwatch" },
]

function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Navbar routes={routes} />
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout
