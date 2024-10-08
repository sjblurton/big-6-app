import React from "react"

import exerciseCmsClient from "@/modules/cms/client/exercise/exercise-client"
import { MuiGrid } from "@/modules/components/library/mui"
import { TIME_SECONDS } from "@/modules/time/constants"

import InstructionsOverviewCard from "../InstructionsOverviewCard/InstructionsOverviewCard"

export const revalidate = TIME_SECONDS.ONE_DAY

async function InstructionsOverviewCardList() {
    const exerciseIds = await exerciseCmsClient.getExerciseIds()

    return exerciseIds.map(({ _id }) => (
        <MuiGrid item key={_id} xs={12}>
            <InstructionsOverviewCard type={_id} />
        </MuiGrid>
    ))
}

export default InstructionsOverviewCardList
