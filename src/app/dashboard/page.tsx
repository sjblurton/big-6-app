import { type Metadata } from "next"

import { MuiContainer } from "@/modules/components/library/mui"
import { createMetadata } from "@/modules/seo/create-metadata"

import WorkoutCardList from "./components/WorkoutCardList/WorkoutCardList"

export const metadata: Metadata = createMetadata({
    title: "Dashboard",
    description: "Dashboard for the Big 6 Calisthenics Training Log Book.",
})

async function Dashboard() {
    return (
        <MuiContainer maxWidth="md" disableGutters>
            <WorkoutCardList />
        </MuiContainer>
    )
}

export default Dashboard
