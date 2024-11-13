import { v4 as UUIDv4 } from "uuid"

import { MuiGrid, MuiSkeleton } from "@/components/libs/mui"

const skeletonKeys = Array.from({ length: 6 }).map(() => UUIDv4())

function WorkoutSkeletonRadios() {
    return (
        <MuiGrid container spacing={3} mt={3} marginInline="auto">
            {skeletonKeys.map((value) => (
                <MuiGrid
                    item
                    key={value}
                    xs={6}
                    justifyContent="center"
                    alignItems="center"
                >
                    <MuiSkeleton variant="circular" height={130} width={130} />
                </MuiGrid>
            ))}
        </MuiGrid>
    )
}

export default WorkoutSkeletonRadios
