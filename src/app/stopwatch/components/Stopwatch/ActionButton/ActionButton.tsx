"use client"

import { MuiTypography } from "@/modules/components/library/mui"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as boarderRadius from "@/styles/utilityClasses/border-radius.module.scss"

import { button } from "./ActionButton.module.scss"

type Properties = {
    startAndStop: () => void
    isRunning: boolean
}

function ActionButton({ isRunning, startAndStop }: Properties) {
    const buttonClass = `${button} ${isRunning ? background.error : background.success} ${boarderRadius.round}`

    return (
        <button type="button" className={buttonClass} onClick={startAndStop}>
            <MuiTypography variant="h1" component="h2">
                {isRunning ? "STOP" : "GO"}
            </MuiTypography>
        </button>
    )
}

export default ActionButton
