"use client"

import { Inter } from "next/font/google"

import Providers from "@/modules/components/Providers/Providers"
import BottomNavigation from "@/modules/components/ui/BottomNavigation/BottomNavigation"
import Navbar from "@/modules/components/ui/Navbar/Navbar"
import { workoutTypes } from "@/modules/model/workout/workout-schemas"

import "../styles/base/global.scss"
import "../styles/base/reset.scss"
import "../styles/main.scss"

const inter = Inter({ subsets: ["latin"] })

const dashboardRoute = "/dashboard"

const routes = [
    { name: "Home", path: "/" },
    {
        name: "instructions",
        path: `/instructions/${workoutTypes.pullUp.id}/level-1`,
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
