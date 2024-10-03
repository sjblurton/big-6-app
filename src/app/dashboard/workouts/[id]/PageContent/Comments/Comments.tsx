import React from "react"

import { MuiTypography } from "@/modules/components/library/mui"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as radius from "@/styles/utilityClasses/border-radius.module.scss"
import * as boxShadow from "@/styles/utilityClasses/box-shadow.module.scss"
import * as padding from "@/styles/utilityClasses/padding.module.scss"
import * as width from "@/styles/utilityClasses/width.module.scss"

import { wrapper } from "./Comments.module.scss"

type Props = {
    isSeconds: boolean
    reps: number[]
    comments?: string
}

function Comments({ isSeconds, reps, comments }: Props) {
    const suffix = isSeconds ? "second" : "rep"
    return (
        <div
            className={`${background.light} ${boxShadow.subtle} ${radius.medium} ${width.w90} ${wrapper} ${padding.p3}`}
        >
            {reps.map((rep, i) => {
                const set = `Set ${i + 1}:`

                return (
                    <MuiTypography key={set} variant="h6">
                        {`${set} ${rep} ${rep === 1 ? suffix : `${suffix}s`}`}
                    </MuiTypography>
                )
            })}
            <br />
            {comments ? (
                <>
                    <MuiTypography variant="h6">Comments:</MuiTypography>
                    <MuiTypography variant="body1">{comments}</MuiTypography>
                </>
            ) : null}
        </div>
    )
}

export default Comments
