"use client"

import "../styles/base/global.scss"
import "../styles/base/reset.scss"
import "../styles/main.scss"

import { Inter } from "next/font/google"

import BottomNavigation from "@/components/client/BottomNavigation/BottomNavigation"
import Navbar from "@/components/client/Navbar/Navbar"
import Providers from "@/components/Providers/Providers"
import { WORKOUT_DETAILS } from "@/constants"

const inter = Inter({ subsets: ["latin"] })

const dashboardRoute = "/dashboard"

const routes = [
    { name: "Home", path: "/" },
    {
        name: "instructions",
        path: `/instructions/${WORKOUT_DETAILS.pullUp.id}/level-1`,
    },
    { name: "Stopwatch", path: "/stopwatch" },
    { name: "Workouts", path: "/workouts" },
    { name: "Dashboard", path: `${dashboardRoute}` },
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
