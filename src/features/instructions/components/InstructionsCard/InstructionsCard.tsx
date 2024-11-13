import Image from "next/image"

import { MuiTypography } from "@/components/libs/mui"
import * as background from "@/styles/utility-classes/background.module.scss"
import * as borderRadius from "@/styles/utility-classes/border-radius.module.scss"
import * as boxShadow from "@/styles/utility-classes/box-shadow.module.scss"
import * as flex from "@/styles/utility-classes/flex.module.scss"
import * as padding from "@/styles/utility-classes/padding.module.scss"

import * as styles from "./InstructionsCard.module.scss"

function InstructionsCard({
    directions,
    isPositive,
    name,
    image,
}: {
    name: string
    directions: string
    isPositive: boolean
    image: string
}) {
    const wrapper = [
        flex.center,
        flex.column,
        styles.wrapper,
        background.light,
        boxShadow.subtle,
        padding.p2,
        borderRadius.large,
    ].join(" ")

    return (
        <div className={wrapper}>
            <MuiTypography variant="h3">{name}</MuiTypography>
            <div className={`${flex.center} ${padding.p1}`}>
                <Image
                    src={image}
                    alt={`Directions image on how to do the ${isPositive ? "positive" : "negative"} for exercise ${name}`}
                    width={150}
                    height={150}
                />
            </div>
            <MuiTypography p={1} variant="body1">
                {directions}
            </MuiTypography>
        </div>
    )
}

export default InstructionsCard
