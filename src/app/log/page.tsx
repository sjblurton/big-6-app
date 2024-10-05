import React from "react"

import workoutsApi from "@/modules/api/address/workouts-api"
import { MuiContainer } from "@/modules/components/library/mui"
import Timeline from "@/modules/components/ui/Timeline/Timeline"
import { createMetadata } from "@/modules/seo/create-metadata"
import { TIME_SECONDS } from "@/modules/time/constants"

export const metadata = createMetadata({
    title: "Log",
    description:
        "The latest workouts you've logged. Keep track of your progress, and see how far you've come!",
})

async function LogPage() {
    const data = await fetch(workoutsApi.allWorkouts(), {
        next: { revalidate: TIME_SECONDS.ONE_MINUTE * 5 },
    }).then((res) => res.json())
    return (
        <MuiContainer maxWidth="md">
            <Timeline data={data} />
        </MuiContainer>
    )
}

export default LogPage
