import { DateTime } from "luxon"
import Link from "next/link"
import React from "react"

import exerciseCmsClient from "@/modules/cms/client/exercise/exercise-client"
import { type WorkoutData } from "@/modules/model/workout/workout-schemas"
import * as flex from "@/styles/utilityClasses/flex.module.scss"

import { MuiButton, MuiTypography } from "../../library/mui"
import {
    MuiTimeline,
    MuiTimelineConnector,
    MuiTimelineContent,
    MuiTimelineDot,
    MuiTimelineItem,
    MuiTimelineOppositeContent,
    MuiTimelineSeparator,
} from "../../library/mui/lab"

type TimelineProperties = {
    data: WorkoutData[]
}

interface TimelineData extends WorkoutData {
    title: string
    description: string
}

async function getTimelineData(data: WorkoutData[]): Promise<TimelineData[]> {
    const timelineData = await Promise.all(
        data.map(async (workout) => {
            const sanityData = await exerciseCmsClient.getExerciseDocument(
                workout.type
            )
            return {
                ...workout,
                title: sanityData.name,
                description: `${sanityData.steps[workout.level - 1].name}`,
            }
        })
    )
    return timelineData
}

async function Timeline({ data }: TimelineProperties) {
    const timeline = await getTimelineData(data)

    return (
        <div>
            <MuiTimeline>
                {timeline.map(({ level, date, key, title, description }) => (
                    <Link href={`/dashboard/workouts/${key}`} key={key}>
                        <MuiTimelineItem
                            sx={{
                                "&::before": {
                                    content: "none",
                                },
                            }}
                        >
                            <MuiTimelineOppositeContent>
                                {DateTime.fromMillis(date).toRelativeCalendar()}
                            </MuiTimelineOppositeContent>
                            <MuiTimelineSeparator>
                                <MuiTimelineDot />
                                <MuiTimelineConnector />
                            </MuiTimelineSeparator>
                            <MuiTimelineContent>
                                <MuiTypography variant="h6" component="span">
                                    {title}
                                </MuiTypography>
                                <MuiTypography>Level {level}</MuiTypography>

                                <MuiTypography>{description}</MuiTypography>
                            </MuiTimelineContent>
                        </MuiTimelineItem>
                    </Link>
                ))}
            </MuiTimeline>
            <div className={flex.center}>
                <MuiButton variant="contained" color="warning" size="medium">
                    More
                </MuiButton>
            </div>
        </div>
    )
}

export default Timeline
