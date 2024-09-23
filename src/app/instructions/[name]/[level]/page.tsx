import { type GetStaticPaths, type Metadata } from "next"
import Link from "next/link"
import ParseInstructions, {
    type InstructionParams,
} from "@/modules/ParseInstructions/ParseInstructions"
import {
    MuiButton,
    MuiContainer,
    MuiGrid,
    MuiTypography,
} from "@/modules/components/library/mui"
import * as colors from "@/styles/colors/_exports.module.scss"
import { levelArray } from "@/modules/model/api/routes/instructions-id-level/constants/levels"
import { workoutIdToTitleString } from "@/modules/strings/transform"
import { createMetadata } from "@/modules/seo/create-metadata"
import {
    MuiChevronLeftIcon,
    MuiChevronRightIcon,
} from "@/modules/components/library/mui/mui-icons"
import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workout-ids"
import Progressions from "./components/Progressions/Progressions"
import InstructionsCard from "./components/InstructionsCard/InstructionsCard"
import InstructionsDropdownTitle from "./components/InstructionsDropdownTitle/InstructionsDropdownTitle"

const paths = WORKOUT_ID_LIST.flatMap((name) =>
    levelArray.map((level) => ({ params: { name, level } }))
)

export const getStaticPaths = (async () => ({
    paths,
    fallback: false,
})) satisfies GetStaticPaths

function getWorkoutInstructionsPageData({ level, name }: InstructionParams) {
    return new ParseInstructions({ level, name }).filterByLevel()
}

export async function generateMetadata({
    params,
}: {
    params: Required<InstructionParams>
}): Promise<Metadata> {
    const data = getWorkoutInstructionsPageData(params)
    return createMetadata({
        title: `${data.name}`,
        description: `Instructions for the workout ${workoutIdToTitleString(
            params.name
        )} at level ${params.level} - ${data.name}.`,
    })
}

async function WorkoutInstructionsPage({
    params,
}: {
    params: Required<InstructionParams>
}) {
    const { directions, level, name, progressions, workoutId } =
        getWorkoutInstructionsPageData(params)

    return (
        <MuiContainer maxWidth="sm" disableGutters>
            <MuiGrid container mt={4} mb={4}>
                <MuiGrid item xs={12}>
                    <InstructionsDropdownTitle params={params} />
                </MuiGrid>
                <MuiGrid item xs={12} p={1}>
                    <MuiTypography variant="h6" component="h2">
                        Progressions
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid item xs={12} p={1}>
                    <Progressions {...progressions} />
                </MuiGrid>
                <MuiGrid item xs={12} pb={1} pt={1}>
                    <InstructionsCard
                        directions={directions.positive}
                        workoutKey={workoutId}
                        level={level}
                        isPositive
                        name={name}
                    />
                </MuiGrid>
                <MuiGrid item xs={12} pb={1}>
                    <InstructionsCard
                        directions={directions.negative}
                        workoutKey={workoutId}
                        level={level}
                        isPositive={false}
                        name={name}
                    />
                </MuiGrid>
                <MuiGrid
                    item
                    xs={12}
                    justifyContent="space-between"
                    display="flex"
                    mt={2}
                    mb={2}
                >
                    <MuiButton
                        size="large"
                        sx={{
                            color: colors.white,
                        }}
                        startIcon={<MuiChevronLeftIcon />}
                        LinkComponent={Link}
                        href={`/instructions/${workoutId}/level-${Math.max(level - 1, 1)}`}
                    >
                        Previous
                    </MuiButton>
                    <MuiButton
                        size="large"
                        sx={{
                            color: colors.white,
                        }}
                        endIcon={<MuiChevronRightIcon />}
                        LinkComponent={Link}
                        href={`/instructions/${workoutId}/level-${Math.min(level + 1, 10)}`}
                    >
                        Next
                    </MuiButton>
                </MuiGrid>
            </MuiGrid>
        </MuiContainer>
    )
}

export default WorkoutInstructionsPage
