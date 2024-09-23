import { type Metadata } from "next"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { MuiContainer } from "@/modules/components/library/mui"
import { createMetadata } from "@/modules/seo/create-metadata"
import authOptions from "../api/auth/auth-options"
import WorkoutCardList from "./components/WorkoutCardList/WorkoutCardList"

export const metadata: Metadata = createMetadata({
    title: "Dashboard",
    description: "Dashboard for the Big 6 Callisthenics Training Log Book.",
})

async function Dashboard() {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect("/")
    }

    return (
        <MuiContainer maxWidth="md" disableGutters>
            <WorkoutCardList />
        </MuiContainer>
    )
}

export default Dashboard
