"use client"

import "../styles/base/reset.scss"
import "../styles/base/global.scss"
import "../styles/main.scss"

import { Inter } from "next/font/google"
import Navbar from "@/modules/components/ui/Navbar/Navbar"
import Providers from "@/modules/components/Providers/Providers"
import BottomNavigation from "@/modules/components/ui/BottomNavigation/BottomNavigation"

const inter = Inter({ subsets: ["latin"] })

const routes = [
    { name: "Home", path: "/" },
    { name: "instructions", path: "/instructions/pull-ups/level-1" },
    { name: "Stopwatch", path: "/stopwatch" },
    { name: "Workouts", path: "/workouts" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Push Ups", path: "/dashboard/push-ups" },
    { name: "Pull Ups", path: "/dashboard/pull-ups" },
    { name: "Squats", path: "/dashboard/squats" },
    { name: "Bridges", path: "/dashboard/bridges" },
    { name: "Handstands", path: "/dashboard/handstands" },
    { name: "Leg Raises", path: "/dashboard/leg-raises" },
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
