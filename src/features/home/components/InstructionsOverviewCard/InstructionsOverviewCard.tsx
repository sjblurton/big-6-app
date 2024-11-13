import Image from "next/image"
import Link from "next/link"
import React from "react"

import { type WorkoutTypeIds } from "@/@types/workouts/workout-types"
import { MuiTypography } from "@/components/libs/mui"
import { TIME_SECONDS } from "@/constants/numbers/dates"
import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"
import * as colors from "@/styles/colors/_exports.module.scss"
import * as background from "@/styles/utility-classes/background.module.scss"
import * as borderRadius from "@/styles/utility-classes/border-radius.module.scss"
import * as shadow from "@/styles/utility-classes/box-shadow.module.scss"
import * as flex from "@/styles/utility-classes/flex.module.scss"
import * as margin from "@/styles/utility-classes/margin.module.scss"
import * as maxWidth from "@/styles/utility-classes/max-width.module.scss"
import * as padding from "@/styles/utility-classes/padding.module.scss"
import * as width from "@/styles/utility-classes/width.module.scss"
import { urlFor } from "@/utils/cms/image"

import ListItem from "./components/ListItem"

type InstructionsOverviewCardProperties = {
    type: WorkoutTypeIds
}

export const revalidate = TIME_SECONDS.ONE_DAY

async function InstructionsOverviewCard({
    type,
}: InstructionsOverviewCardProperties) {
    const { name, image, description, steps } =
        await workoutCmsClient.getExerciseDocument(type)

    return (
        <article
            className={[
                margin.auto,
                background.light,
                borderRadius.medium,
                padding.p2,
                shadow.subtle,
                width.w90,
                maxWidth.large,
                flex.center,
                flex.column,
                flex.gap2,
            ].join(" ")}
        >
            <div
                className={[padding.p2, maxWidth.medium, margin.auto].join(" ")}
            >
                <Image
                    height={150}
                    width={150}
                    src={urlFor(image).height(150).width(150).toString()}
                    alt={`A person performing the level ten version of the exercise ${name}`}
                />
            </div>

            <MuiTypography
                color={colors.secondaryLight}
                variant="h2"
                component="h2"
                width="100%"
            >
                <Link href={`instructions/${type}/level-1`}>{name}</Link>
            </MuiTypography>

            <MuiTypography style={{ flex: 2 }}>{description}</MuiTypography>

            <ul style={{ width: "100%" }}>
                {steps.map(({ _key, name: stepName, step }) => (
                    <ListItem
                        key={_key}
                        type={type}
                        content={stepName}
                        level={step}
                    />
                ))}
            </ul>
        </article>
    )
}

export default InstructionsOverviewCard
