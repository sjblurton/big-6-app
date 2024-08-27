import React from "react"
import { DateTime } from "luxon"
import * as flex from "@/styles/utilityClasses/flex.module.scss"
import Link from "next/link"
import { WorkoutIds } from "@/modules/model/api/routes/shared/workoutIds"
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
    data: {
        time: number
        workoutId: WorkoutIds
        title: string
        level: number
        description: string
        key: string
    }[]
}

function Timeline({ data }: TimelineProps) {
    return (
        <>
            <MuiTimeline>
                {data.map(
                    ({ level, description, time, title, key, workoutId }) => (
                        <Link href={`/dashboard/${workoutId}/${key}`} key={key}>
                            <MuiTimelineItem
                                sx={{
                                    "&::before": {
                                        content: "none",
                                    },
                                }}
                            >
                                <MuiTimelineOppositeContent>
                                    {DateTime.fromMillis(
                                        time
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
        </>
    )
}

export default Timeline
