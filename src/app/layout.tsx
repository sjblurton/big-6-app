"use client"

import "../styles/base/reset.scss"
import "../styles/base/global.scss"
import "../styles/main.scss"

import { Inter } from "next/font/google"
import Navbar from "@/modules/components/ui/Navbar/Navbar"
import Providers from "@/modules/components/Providers/Providers"
import BottomNavigation from "@/modules/components/ui/BottomNavigation/BottomNavigation"
import { workoutTypes } from "@/modules/model/api/routes/shared/schemas/workout-data-schemas"

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
    {
        name: "Push Ups",
        path: `${dashboardRoute}/${workoutTypes.pushUp.id}`,
    },
    {
        name: "Pull Ups",
        path: `${dashboardRoute}/${workoutTypes.pullUp.id}`,
    },
    { name: "Squats", path: `${dashboardRoute}/${workoutTypes.squat.id}` },
    {
        name: "Bridges",
        path: `${dashboardRoute}/${workoutTypes.bridge.id}`,
    },
    {
        name: "Handstands",
        path: `${dashboardRoute}/${workoutTypes.handstand.id}`,
    },
    {
        name: "Leg Raises",
        path: `${dashboardRoute}/${workoutTypes.legRaise.id}`,
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
