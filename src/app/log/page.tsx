import React from "react"

import { MuiContainer } from "@/modules/components/library/mui"
import Timeline from "@/modules/components/ui/Timeline/Timeline"

async function LogPage() {
    const data = await fetch("http://localhost:3000/api/v1/workouts").then(
        (res) => res.json()
    )
    return (
        <MuiContainer maxWidth="md">
            <Timeline data={data} />
        </MuiContainer>
    )
}

export default LogPage
