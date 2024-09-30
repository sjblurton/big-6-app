import React from "react"
import { MuiGrid } from "@/modules/components/library/mui"
import { SanityClient } from "@/modules/sanity/lib/client"
import { TIME_SECONDS } from "@/modules/time/constants"
import InstructionsOverviewCard from "../InstructionsOverviewCard/InstructionsOverviewCard"

export const revalidate = TIME_SECONDS.ONE_DAY

async function InstructionsOverviewCardList() {
    const exerciseIds = await SanityClient.getExerciseIds()

    return exerciseIds.map(({ _id }) => (
        <MuiGrid item key={_id} xs={12}>
            <InstructionsOverviewCard workoutId={_id} />
        </MuiGrid>
    ))
}

export default InstructionsOverviewCardList
