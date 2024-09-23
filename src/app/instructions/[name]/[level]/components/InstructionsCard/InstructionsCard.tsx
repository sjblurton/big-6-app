import * as background from "@/styles/utilityClasses/background.module.scss"
import * as boxShadow from "@/styles/utilityClasses/box-shadow.module.scss"
import * as padding from "@/styles/utilityClasses/padding.module.scss"
import * as flex from "@/styles/utilityClasses/flex.module.scss"
import instructionImages, {
    type InstructionImagesKeys,
} from "@/modules/components/assets/instructions"
import {
    type LevelKeys,
    levelKeysSchema,
} from "@/modules/components/assets/instructions/types"
import { MuiTypography } from "@/modules/components/library/mui"
import * as borderRadius from "@/styles/utilityClasses/border-radius.module.scss"
import * as styles from "./InstructionsCard.module.scss"

const svgSelector = ({
    levelKey,
    isPositive,
    workoutKey,
}: {
    workoutKey: InstructionImagesKeys
    levelKey: LevelKeys
    isPositive: boolean
}) =>
    instructionImages[workoutKey][levelKey][
        isPositive ? "positive" : "negative"
    ]

function InstructionsCard({
    directions,
    isPositive,
    level,
    name,
    workoutKey,
}: {
    name: string
    directions: string
    workoutKey: InstructionImagesKeys
    level: number
    isPositive: boolean
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

    const Svg = svgSelector({
        workoutKey,
        levelKey: levelKeysSchema.parse(`level${level}`),
        isPositive,
    })

    return (
        <div className={wrapper}>
            <MuiTypography variant="h3">{name}</MuiTypography>
            <div className={`${flex.center} ${padding.p1}`}>
                <Svg />
            </div>
            <MuiTypography p={1} variant="body1">
                {directions}
            </MuiTypography>
        </div>
    )
}

export default InstructionsCard
