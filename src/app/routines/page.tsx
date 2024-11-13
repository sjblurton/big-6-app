import { MuiContainer } from "@/components/libs/mui"
import routineCmsClient from "@/features/routines/lib/routine-client"
import { createMetadata } from "@/utils/seo/create-metadata"

import Routine from "../../features/routines/components/Routine/Routine"

export const metadata = createMetadata({
    title: "Routines",
    description:
        "Progressive calisthenics app based on the book; Convict Conditioning. Track your progress, select a routine, and keep your focus as you master the Big 6 calisthenics movements!",
})

async function RoutinesPage() {
    const routines = await routineCmsClient.getRoutineDocuments()
    return (
        <MuiContainer maxWidth="sm">
            <Routine routines={routines} />
        </MuiContainer>
    )
}

export default RoutinesPage
