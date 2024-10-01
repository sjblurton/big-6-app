import { DateTime } from "luxon"
import Link from "next/link"
import Image from "next/image"
import { MuiTypography } from "@/modules/components/library/mui"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as boxShadow from "@/styles/utilityClasses/box-shadow.module.scss"
import { type WorkoutData } from "@/modules/model/workout/workout-schemas"
import ProgressBar from "@/modules/components/ui/ProgressBar/ProgressBar"
import { CmsClient } from "@/modules/cms/client/client"
import { urlFor } from "@/modules/cms/client/image"
import { box, card, svg } from "./WorkoutCard.module.scss"

type Props = {
    workout: WorkoutData
}

async function WorkoutCard({ workout: { date, level, reps, type } }: Props) {
    const { image, step, name } = await CmsClient.getExerciseStep(type, level)

    const stepProgression = step.progressions.find(
        (prog) => prog.stage === "Advanced"
    )

    if (!stepProgression) {
        throw new Error("Advanced stage progression not found")
    }

    const advanceGoal = stepProgression.sets * stepProgression.reps

    const totalReps = reps.reduce((acc, curr) => acc + curr, 0)

    const time = DateTime.fromMillis(date).toRelativeCalendar()

    return (
        <Link
            href={`/dashboard/workouts/type/${type}`}
            style={{ display: "contents" }}
        >
            <article
                className={`${card} ${background.light} ${boxShadow.subtle}`}
            >
                <div className={box}>
                    <MuiTypography variant="h3">{name}</MuiTypography>
                    <MuiTypography variant="caption" component="small">
                        Level: {level}
                    </MuiTypography>
                    <MuiTypography variant="caption" component="small">
                        {time}
                    </MuiTypography>
                </div>
                <div className={svg}>
                    <Image
                        src={urlFor(image).height(100).width(100).url()}
                        height={100}
                        width={100}
                        alt={`${name} workout demo image.`}
                    />
                </div>
                <ProgressBar goal={advanceGoal} actual={totalReps} />
            </article>
        </Link>
    )
}

export default WorkoutCard
