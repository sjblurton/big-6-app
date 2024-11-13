import Link from "next/link"

import { type WorkoutTypeIds } from "@/@types/workouts/workout-types"
import { MuiTypography } from "@/components/libs/mui"
import * as colors from "@/styles/colors/_exports.module.scss"

type Properties = {
    type: WorkoutTypeIds
    content: string
    level: number
}

function ListItem({ type, content, level }: Properties) {
    return (
        <li>
            <MuiTypography
                style={{ flex: 1 }}
                variant="h5"
                component="h3"
                width="100%"
                color={colors.secondaryLight}
            >
                <Link href={`instructions/${type}/level-${level}`}>
                    {content}
                </Link>
            </MuiTypography>
        </li>
    )
}

export default ListItem
