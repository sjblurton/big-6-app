import Link from "next/link"

import { MuiTypography } from "@/modules/components/library/mui"
import { type WorkoutTypeIds } from "@/modules/model/workout/workout-schemas"
import * as colors from "@/styles/colors/_exports.module.scss"

type Props = {
    type: WorkoutTypeIds
    content: string
    level: number
}

function ListItem({ type, content, level }: Props) {
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
