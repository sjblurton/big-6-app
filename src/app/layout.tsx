"use client"

import "../styles/base/global.scss"
import "../styles/base/reset.scss"
import "../styles/main.scss"

import { Inter } from "next/font/google"

import BottomNavigation from "@/components/client/BottomNavigation/BottomNavigation"
import Navbar from "@/components/client/Navbar/Navbar"
import Providers from "@/components/Providers/Providers"
import { ROUTES } from "@/constants/strings/routes"

const inter = Inter({ subsets: ["latin"] })

const routes = [
    { name: ROUTES.home.label, path: ROUTES.home.value },
    {
        name: ROUTES.instructions.label,
        path: ROUTES.instructions.value,
    },
    {
        name: ROUTES.stopwatch.label,
        path: ROUTES.stopwatch.value,
    },
    {
        name: ROUTES.dashboard.label,
        path: ROUTES.dashboard.value,
    },
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
                    <BottomNavigation />
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout
