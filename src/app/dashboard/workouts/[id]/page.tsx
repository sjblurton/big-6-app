import { type Metadata } from "next"

import { MuiContainer } from "@/modules/components/library/mui"
import { createMetadata } from "@/modules/seo/create-metadata"

import PageContent from "./PageContent/PageContent"

type Parameters = {
    id: string
}

export async function generateMetadata({
    params: { id },
}: {
    params: Parameters
}): Promise<Metadata> {
    return createMetadata({
        title: `Document: ${id}`,
        description: `The latest workout data for the ${id} exercise.`,
    })
}

function WorkoutSummery() {
    return (
        <MuiContainer maxWidth="md" disableGutters>
            <PageContent />
        </MuiContainer>
    )
}

export default WorkoutSummery
