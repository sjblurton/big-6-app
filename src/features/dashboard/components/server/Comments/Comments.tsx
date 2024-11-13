import React from "react"

import { MuiTypography } from "@/components/libs/mui"
import * as background from "@/styles/utility-classes/background.module.scss"
import * as radius from "@/styles/utility-classes/border-radius.module.scss"
import * as boxShadow from "@/styles/utility-classes/box-shadow.module.scss"
import * as padding from "@/styles/utility-classes/padding.module.scss"
import * as width from "@/styles/utility-classes/width.module.scss"

import { wrapper } from "./Comments.module.scss"

type Properties = {
    isSeconds: boolean
    reps: { value: number }[]
    comments?: string
}

function Comments({ isSeconds, reps, comments }: Properties) {
    const suffix = isSeconds ? "second" : "rep"
    return (
        <div
            className={`${background.light} ${boxShadow.subtle} ${radius.medium} ${width.w90} ${wrapper} ${padding.p3}`}
        >
            {reps.map((rep, index) => {
                const set = `Set ${index + 1}:`

                return (
                    <MuiTypography key={set} variant="h6">
                        {`${set} ${rep.value} ${rep.value === 1 ? suffix : `${suffix}s`}`}
                    </MuiTypography>
                )
            })}
            <br />
            {comments && (
                <>
                    <MuiTypography variant="h6">Comments:</MuiTypography>
                    <MuiTypography variant="body1">{comments}</MuiTypography>
                </>
            )}
        </div>
    )
}

export default Comments
