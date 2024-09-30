import React from "react"
import Link from "next/link"
import Image from "next/image"
import * as flex from "@/styles/utilityClasses/flex.module.scss"
import * as margin from "@/styles/utilityClasses/margin.module.scss"
import * as padding from "@/styles/utilityClasses/padding.module.scss"
import * as shadow from "@/styles/utilityClasses/box-shadow.module.scss"
import * as width from "@/styles/utilityClasses/width.module.scss"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as colors from "@/styles/colors/_exports.module.scss"
import { MuiTypography } from "@/modules/components/library/mui"
import * as borderRadius from "@/styles/utilityClasses/border-radius.module.scss"
import * as maxWidth from "@/styles/utilityClasses/max-width.module.scss"
import { TIME_SECONDS } from "@/modules/time/constants"
import { urlFor } from "@/modules/sanity/lib/image"
import { SanityClient } from "@/modules/sanity/lib/client"
import { type WorkoutTypeIds } from "@/modules/model/api/routes/shared/schemas/workout-data-schemas"
import ListItem from "./components/ListItem"

type InstructionsOverviewCardProps = {
    type: WorkoutTypeIds
}

export const revalidate = TIME_SECONDS.ONE_DAY

async function InstructionsOverviewCard({
    type,
}: InstructionsOverviewCardProps) {
    const { name, image, description, steps } =
        await SanityClient.getExerciseDocument(type)

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
