import { type Metadata } from "next"

import { MuiContainer } from "@/modules/components/library/mui"
import { createMetadata } from "@/modules/seo/create-metadata"

import StopWatch from "./components/Stopwatch/Stopwatch"

export const metadata: Metadata = createMetadata({
    title: "Stop Watch",
    description: "A simple stop watch to help you time your workouts.",
})

function StopWatchPage() {
    return (
        <MuiContainer
            maxWidth="xs"
            disableGutters
            sx={{ height: "calc(100vh - 64px)" }}
        >
            <StopWatch />
        </MuiContainer>
    )
}

export default StopWatchPage
