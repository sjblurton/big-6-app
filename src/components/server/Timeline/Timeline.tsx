import { DateTime } from "luxon"
import Link from "next/link"
import React from "react"

import { type WorkoutData } from "@/@types/workouts/workout-types"
import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"
import * as flex from "@/styles/utility-classes/flex.module.scss"

import { MuiButton, MuiTypography } from "../../libs/mui"
import {
    MuiTimeline,
    MuiTimelineConnector,
    MuiTimelineContent,
    MuiTimelineDot,
    MuiTimelineItem,
    MuiTimelineOppositeContent,
    MuiTimelineSeparator,
} from "../../libs/mui/lab"

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
            const sanityData = await workoutCmsClient.getExerciseDocument(
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
                {timeline.map(({ level, date, id, title, description }) => (
                    <Link href={`/dashboard/workouts/${id}`} key={id}>
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
