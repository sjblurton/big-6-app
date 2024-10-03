"use client"

import { DateTime } from "luxon"
import Image from "next/image"
import Link from "next/link"

import { CmsClient } from "@/modules/cms/client/client"
import { urlFor } from "@/modules/cms/client/image"
import { MuiTypography } from "@/modules/components/library/mui"
import ProgressBar from "@/modules/components/ui/ProgressBar/ProgressBar"
import { type WorkoutData } from "@/modules/model/workout/workout-schemas"
import useGetExerciseStep from "@/modules/tanstackQuery/hooks/use-get-exercise-step"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as boxShadow from "@/styles/utilityClasses/box-shadow.module.scss"

import { box, card, svg } from "./WorkoutCard.module.scss"
import WorkoutCardSkeleton from "./WorkoutCardSkeleton"

type Props = {
    workout: WorkoutData
}

function WorkoutCard({ workout: { date, level, reps, type } }: Props) {
    const { data, error, isLoading, isError } = useGetExerciseStep({
        level,
        type,
    })

    if (isLoading) {
        return <WorkoutCardSkeleton />
    }

    if (isError || !data) {
        throw error || new Error("No data")
    }

    const { name, image, step } = data

    const advanceGoal = CmsClient.getAdvanceGoal(step.progressions)

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
