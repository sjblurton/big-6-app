import { useMemo } from "react"

import { MuiGrid } from "@/components/libs/mui"
import { createUUIDs } from "@/utils/arrays/uuids"

import WorkoutCardSkeleton from "../WorkoutCard/WorkoutCardSkeleton"

function WorkoutCardListSkeleton() {
    const uuids = useMemo(() => createUUIDs(6), [])
    return (
        <MuiGrid container mt={3} mb={1}>
            {uuids.map((value) => (
                <MuiGrid
                    item
                    xs={12}
                    key={value}
                    display="flex"
                    height="100%"
                    alignContent="center"
                    justifyContent="center"
                >
                    <WorkoutCardSkeleton />
                </MuiGrid>
            ))}
        </MuiGrid>
    )
}

export default WorkoutCardListSkeleton
