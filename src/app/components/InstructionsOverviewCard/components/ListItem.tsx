import Link from "next/link"
import { MuiTypography } from "@/modules/components/library/mui"
import * as colors from "@/styles/colors/_exports.module.scss"
import { type WorkoutIds } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"

type Props = {
    workoutId: WorkoutIds
    content: string
    level: number
}

function ListItem({ workoutId, content, level }: Props) {
    return (
        <li>
            <MuiTypography
                style={{ flex: 1 }}
                variant="h5"
                component="h3"
                width="100%"
                color={colors.secondaryLight}
            >
                <Link href={`instructions/${workoutId}/level-${level}`}>
                    {content}
                </Link>
            </MuiTypography>
        </li>
    )
}

export default ListItem
