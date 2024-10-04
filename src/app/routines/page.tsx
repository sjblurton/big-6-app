import routineCmsClient from "@/modules/cms/client/routine/routine-client"
import { MuiContainer } from "@/modules/components/library/mui"
import { createMetadata } from "@/modules/seo/create-metadata"

import Routine from "./components/Routine/Routine"

export const metadata = createMetadata({
    title: "Routines",
    description:
        "Progressive calisthenics app based on the book; Convict Conditioning. Track your progress, select a routine, and keep your focus as you master the Big 6 calisthenics movements!",
})

async function RoutinesPage() {
    const routines = await routineCmsClient.getRoutineDocuments()
    return (
        <MuiContainer maxWidth="md">
            <Routine routines={routines} />
        </MuiContainer>
    )
}

export default RoutinesPage
