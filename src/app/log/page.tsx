import React from "react"

import { MuiContainer } from "@/components/libs/mui"
import Timeline from "@/components/server/Timeline/Timeline"
import { TIME_SECONDS } from "@/constants/numbers/dates"
import workoutsApiEndpoints from "@/server/endpoints/workouts-api-endpoints"
import { createMetadata } from "@/utils/seo/create-metadata"

export const metadata = createMetadata({
    title: "Log",
    description:
        "The latest workouts you've logged. Keep track of your progress, and see how far you've come!",
})

async function LogPage() {
    const data = await fetch(workoutsApiEndpoints.getWorkouts(), {
        next: { revalidate: TIME_SECONDS.ONE_MINUTE * 5 },
    }).then((res) => res.json())
    return (
        <MuiContainer maxWidth="md">
            <Timeline data={data} />
        </MuiContainer>
    )
}

export default LogPage
