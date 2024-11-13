"use client"

import Circle from "./Circle/Circle"
import useCountUp from "./hooks/use-count-up"

const ZERO_DASH_OFFSET = 345
const DURATION = 750

function ProgressBar({ goal, actual }: { goal: number; actual: number }) {
    const onePercent = goal / 100
    const endPercent = Math.round(actual / onePercent)
    const dashOffsetTarget =
        endPercent < 100
            ? Math.round(ZERO_DASH_OFFSET * ((100 - endPercent) / 100))
            : 0

    const dashOffsetValue = useCountUp({
        start: ZERO_DASH_OFFSET,
        end: dashOffsetTarget,
        duration: DURATION,
    })

    const percent = useCountUp({
        start: 0,
        end: endPercent,
        duration: DURATION,
    })

    return (
        <Circle
            dashOffsetValue={dashOffsetValue}
            text={{ goal, reps: actual, percent }}
        />
    )
}

export default ProgressBar
