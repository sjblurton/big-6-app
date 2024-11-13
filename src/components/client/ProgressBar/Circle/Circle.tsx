import {
    grey600,
    primaryLight,
    secondaryDark,
    secondaryLight,
} from "@/styles/colors/_exports.module.scss"

import CircleText from "./CircleText"

function Circle({
    dashOffsetValue,
    text,
}: {
    dashOffsetValue: number
    text?: {
        percent: number
        goal: number
        reps: number
    }
}) {
    return (
        <svg
            width="120"
            height="120"
            style={{ background: primaryLight, borderRadius: "50%" }}
        >
            <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="80%" y2="20%">
                    <stop offset="0%" stopColor={secondaryDark} />
                    <stop offset="100%" stopColor={secondaryLight} />
                </linearGradient>
            </defs>

            <g
                fill="transparent"
                strokeDasharray="345.4"
                strokeWidth="10"
                transform="rotate(-90 60 60)"
            >
                <circle cx="60" cy="60" r="55" stroke={grey600} />
                <circle
                    cx="60"
                    cy="60"
                    r="55"
                    stroke="url(#linear)"
                    strokeDashoffset={dashOffsetValue}
                    strokeLinecap="round"
                />
            </g>
            {text && (
                <CircleText
                    percent={text.percent}
                    goal={text.goal}
                    reps={text.reps}
                />
            )}
        </svg>
    )
}

export default Circle
