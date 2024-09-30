"use client"

import "../styles/base/reset.scss"
import "../styles/base/global.scss"
import "../styles/main.scss"

import { Inter } from "next/font/google"
import Navbar from "@/modules/components/ui/Navbar/Navbar"
import Providers from "@/modules/components/Providers/Providers"
import BottomNavigation from "@/modules/components/ui/BottomNavigation/BottomNavigation"
import { workoutIds } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"

const inter = Inter({ subsets: ["latin"] })

const dashboardRoute = "/dashboard"

const routes = [
    { name: "Home", path: "/" },
    {
        name: "instructions",
        path: `/instructions/${workoutIds.pullUpId}/level-1`,
    },
    { name: "Stopwatch", path: "/stopwatch" },
    { name: "Workouts", path: "/workouts" },
    { name: "Dashboard", path: `${dashboardRoute}` },
    { name: "Push Ups", path: `${dashboardRoute}/${workoutIds.pushUpId}` },
    { name: "Pull Ups", path: `${dashboardRoute}/${workoutIds.pullUpId}` },
    { name: "Squats", path: `${dashboardRoute}/${workoutIds.squatId}` },
    { name: "Bridges", path: `${dashboardRoute}/${workoutIds.bridgeId}` },
    { name: "Handstands", path: `${dashboardRoute}/${workoutIds.handstandId}` },
    { name: "Leg Raises", path: `${dashboardRoute}/${workoutIds.legRaiseId}` },
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
