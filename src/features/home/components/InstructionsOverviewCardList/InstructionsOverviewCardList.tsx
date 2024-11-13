import React from "react"

import { MuiGrid } from "@/components/libs/mui"
import { TIME_SECONDS } from "@/constants/numbers/dates"
import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"

import InstructionsOverviewCard from "../InstructionsOverviewCard/InstructionsOverviewCard"

export const revalidate = TIME_SECONDS.ONE_DAY

async function InstructionsOverviewCardList() {
    const exerciseIds = await workoutCmsClient.getExerciseIds()

    return exerciseIds.map(({ _id }) => (
        <MuiGrid item key={_id} xs={12}>
            <InstructionsOverviewCard type={_id} />
        </MuiGrid>
    ))
}

export default InstructionsOverviewCardList
