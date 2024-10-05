import { useMemo } from "react"

import { createUUIDs } from "@/modules/arrays/uuids"
import { MuiGrid } from "@/modules/components/library/mui"

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
