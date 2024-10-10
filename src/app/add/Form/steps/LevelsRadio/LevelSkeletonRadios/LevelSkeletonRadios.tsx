import { v4 as UUIDv4 } from "uuid"

import { MuiGrid, MuiSkeleton } from "@/modules/components/library/mui"

const skeletonKeys = Array.from({ length: 10 }).map(() => UUIDv4())

function LevelSkeletonRadios() {
    return (
        <MuiGrid
            container
            spacing={3}
            mt={3}
            marginInline="auto"
            justifyContent="center"
        >
            {skeletonKeys.map((value) => (
                <MuiGrid
                    item
                    key={value}
                    xs={4}
                    justifyContent="center"
                    alignItems="center"
                >
                    <MuiSkeleton variant="circular" height={80} width={80} />
                </MuiGrid>
            ))}
        </MuiGrid>
    )
}

export default LevelSkeletonRadios
