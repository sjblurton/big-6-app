import { MuiGrid } from "@/modules/components/library/mui"
import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workoutIds"
import React from "react"
import InstructionsOverviewCard from "../InstructionsOverviewCard/InstructionsOverviewCard"

function InstructionsOverviewCardList() {
    return WORKOUT_ID_LIST.map((workoutId) => (
        <MuiGrid item key={workoutId} xs={12}>
            <InstructionsOverviewCard workoutId={workoutId} />
        </MuiGrid>
    ))
}

export default InstructionsOverviewCardList
