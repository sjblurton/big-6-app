import React from "react"
import { DateTime } from "luxon"
import * as flex from "@/styles/utilityClasses/flex.module.scss"
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
        title: string
        level: number
        description: string
    }[]
}

function Timeline({ data }: TimelineProps) {
    return (
        <>
            <MuiTimeline>
                {data.map(({ level, description, time, title }) => (
                    <MuiTimelineItem key={time}>
                        <MuiTimelineOppositeContent>
                            {DateTime.fromMillis(time).toRelativeCalendar()}
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
                ))}
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
