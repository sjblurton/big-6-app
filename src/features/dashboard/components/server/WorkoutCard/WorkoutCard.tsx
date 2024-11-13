import { DateTime } from "luxon"
import Image from "next/image"
import Link from "next/link"

import { type WorkoutData } from "@/@types/workouts/workout-types"
import ProgressBar from "@/components/client/ProgressBar/ProgressBar"
import { MuiTypography } from "@/components/libs/mui"
import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"
import * as background from "@/styles/utility-classes/background.module.scss"
import * as boxShadow from "@/styles/utility-classes/box-shadow.module.scss"
import { urlFor } from "@/utils/cms/image"

import { box, card, svg } from "./WorkoutCard.module.scss"

type Properties = {
    workout: WorkoutData
}

async function WorkoutCard({
    workout: { date, level, reps, type },
}: Properties) {
    const { advanceGoal, image, name } = await workoutCmsClient.getExerciseStep(
        type,
        level
    )

    const totalReps = reps.reduce(
        (accumulator, current) => accumulator + current.value,
        0
    )

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
