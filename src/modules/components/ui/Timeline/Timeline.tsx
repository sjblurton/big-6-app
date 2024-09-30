import React from "react"
import { DateTime } from "luxon"
import Link from "next/link"
import * as flex from "@/styles/utilityClasses/flex.module.scss"
import { type WorkoutData } from "@/modules/model/api/routes/shared/schemas/workout-data-schemas"
import { SanityClient } from "@/modules/sanity/lib/client"
import {
    MuiTimeline,
    MuiTimelineConnector,
    MuiTimelineContent,
    MuiTimelineDot,
    MuiTimelineItem,
    MuiTimelineOppositeContent,
    MuiTimelineSeparator,
} from "../../library/mui/lab"
import { MuiButton, MuiTypography } from "../../library/mui"

type TimelineProps = {
    data: WorkoutData[]
}

interface TimelineData extends WorkoutData {
    title: string
    description: string
}

async function getTimelineData(data: WorkoutData[]): Promise<TimelineData[]> {
    const timelineData = await Promise.all(
        data.map(async (workout) => {
            const sanityData = await SanityClient.getExerciseDocument(
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

async function Timeline({ data }: TimelineProps) {
    const timeline = await getTimelineData(data)

    return (
        <div>
            <MuiTimeline>
                {timeline.map(
                    ({ level, date, key, type, title, description }) => (
                        <Link href={`/dashboard/${type}/${key}`} key={key}>
                            <MuiTimelineItem
                                sx={{
                                    "&::before": {
                                        content: "none",
                                    },
                                }}
                            >
                                <MuiTimelineOppositeContent>
                                    {DateTime.fromMillis(
                                        date
                                    ).toRelativeCalendar()}
                                </MuiTimelineOppositeContent>
                                <MuiTimelineSeparator>
                                    <MuiTimelineDot />
                                    <MuiTimelineConnector />
                                </MuiTimelineSeparator>
                                <MuiTimelineContent>
                                    <MuiTypography
                                        variant="h6"
                                        component="span"
                                    >
                                        {title}
                                    </MuiTypography>
                                    <MuiTypography>Level {level}</MuiTypography>

                                    <MuiTypography>{description}</MuiTypography>
                                </MuiTimelineContent>
                            </MuiTimelineItem>
                        </Link>
                    )
                )}
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
