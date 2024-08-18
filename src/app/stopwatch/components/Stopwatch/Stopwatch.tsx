"use client"

import {
    MuiButton,
    MuiGrid,
    MuiTypography,
} from "@/modules/components/library/mui"
import ActionButton from "./ActionButton/ActionButton"
import useStopwatch from "./hooks/useStopwatch"

function StopWatch() {
    const { milliseconds, minutes, seconds, reset, startAndStop, isRunning } =
        useStopwatch()
    return (
        <MuiGrid
            container
            gap={4}
            height="100%"
            justifyContent="center"
            alignContent="center"
        >
            <MuiGrid item margin="auto">
                <MuiTypography variant="h1" component="h2" textAlign="center">
                    {minutes} : {seconds} : {milliseconds}
                </MuiTypography>
            </MuiGrid>
            <MuiGrid item xs={12} m="auto">
                <MuiTypography textAlign="center" variant="body1">
                    Start, pause, and reset the timer below.
                </MuiTypography>
            </MuiGrid>
            <MuiGrid item xs={12} display="flex" justifyContent="center">
                <MuiButton
                    onClick={reset}
                    size="large"
                    variant="contained"
                    color="error"
                >
                    Reset
                </MuiButton>
            </MuiGrid>
            <MuiGrid item xs={12} display="flex" justifyContent="center">
                <ActionButton
                    isRunning={isRunning}
                    startAndStop={startAndStop}
                />
            </MuiGrid>
        </MuiGrid>
    )
}

export default StopWatch
