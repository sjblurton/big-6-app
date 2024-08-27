import { DateTime } from "luxon"
import Link from "next/link"
import { MuiTypography } from "@/modules/components/library/mui"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as boxShadow from "@/styles/utilityClasses/boxShadow.module.scss"
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas"
import ParseInstructions from "@/modules/ParseInstructions/ParseInstructions"
import { z } from "zod"
import { levelArray } from "@/modules/model/api/routes/instructions-id-level/constants/levels"
import { workoutSvgs } from "@/modules/components/assets/workouts"
import ProgressBar from "@/modules/components/ui/ProgressBar/ProgressBar"
import { box, card, svg } from "./WorkoutCard.module.scss"

type Props = {
    workout: WorkoutData
}

function WorkoutCard({
    workout: { date, level, reps, workoutId: workout },
}: Props) {
    const advanceGoal = new ParseInstructions({
        level: z.enum(levelArray).parse(`level-${level}`),
        name: workout,
    }).findLevelGoal()

    const totalReps = reps.reduce((acc, curr) => acc + curr, 0)
    const { title, component: Workout } = workoutSvgs[workout]
    const time = DateTime.fromMillis(date).toRelativeCalendar()

    return (
        <Link href={`/dashboard/${workout}`} style={{ display: "contents" }}>
            <article
                className={`${card} ${background.light} ${boxShadow.subtle}`}
            >
                <div className={box}>
                    <MuiTypography variant="h3">{title}</MuiTypography>
                    <MuiTypography variant="caption" component="small">
                        Level: {level}
                    </MuiTypography>
                    <MuiTypography variant="caption" component="small">
                        {time}
                    </MuiTypography>
                </div>
                <div className={svg}>
                    <Workout />
                </div>
                <ProgressBar goal={advanceGoal} actual={totalReps} />
            </article>
        </Link>
    )
}

export default WorkoutCard
