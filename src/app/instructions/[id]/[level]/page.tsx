import { type GetStaticPaths, type Metadata } from "next"
import Link from "next/link"

import { type WorkoutTypeIds } from "@/@types/workouts/workout-types"
import {
    MuiButton,
    MuiContainer,
    MuiGrid,
    MuiTypography,
} from "@/components/libs/mui"
import {
    MuiChevronLeftIcon,
    MuiChevronRightIcon,
} from "@/components/libs/mui/mui-icons"
import { LEVELS_ARRAY } from "@/constants/strings/levels-details"
import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"
import * as colors from "@/styles/colors/_exports.module.scss"
import { urlFor } from "@/utils/cms/image"
import { createMetadata } from "@/utils/seo/create-metadata"
import { pathLevelToNumber } from "@/utils/strings/transform"

import InstructionsCard from "../../../../features/instructions/components/InstructionsCard/InstructionsCard"
import InstructionsDropdownTitle from "../../../../features/instructions/components/InstructionsDropdownTitle/InstructionsDropdownTitle"
import Progressions from "../../../../features/instructions/components/Progressions/Progressions"

type Parameters = {
    id: WorkoutTypeIds
    level: string
}

const exerciseIds = await workoutCmsClient.getExerciseIds()
const paths = exerciseIds.flatMap(({ _id }) =>
    LEVELS_ARRAY.map(({ name }) => ({ params: { id: _id, level: name } }))
)

export const getStaticPaths = (async () => ({
    paths,
    fallback: false,
})) satisfies GetStaticPaths

export async function generateMetadata({
    params: { id, level },
}: {
    params: Parameters
}): Promise<Metadata> {
    const data = await workoutCmsClient.getExerciseStep(
        id,
        pathLevelToNumber(level)
    )
    return createMetadata({
        title: `${data.name}`,
        description: `Instructions for the workout ${data.name} at level ${level} - ${data.name}.`,
    })
}

async function WorkoutInstructionsPage({
    params: { id, level },
}: {
    params: Parameters
}) {
    const {
        step: {
            progressions,
            name,
            negative,
            negativeImage,
            positive,
            positiveImage,
            video,
        },
    } = await workoutCmsClient.getExerciseStep(id, pathLevelToNumber(level))

    return (
        <MuiContainer maxWidth="sm" disableGutters>
            <MuiGrid container mt={4} mb={4}>
                <MuiGrid item xs={12}>
                    <InstructionsDropdownTitle id={id} level={level} />
                </MuiGrid>
                <MuiGrid item xs={12} p={1}>
                    <MuiTypography variant="h6" component="h2">
                        Progressions
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid item xs={12} p={1}>
                    <Progressions data={progressions} />
                </MuiGrid>
                <MuiGrid item xs={12} pb={1} pt={1}>
                    <InstructionsCard
                        directions={positive}
                        isPositive
                        name={name}
                        image={urlFor(positiveImage)
                            .height(150)
                            .width(150)
                            .url()}
                    />
                </MuiGrid>
                <MuiGrid item xs={12} pb={1}>
                    <InstructionsCard
                        directions={negative}
                        isPositive={false}
                        name={name}
                        image={urlFor(negativeImage)
                            .height(150)
                            .width(150)
                            .url()}
                    />
                </MuiGrid>
                <MuiGrid
                    item
                    container
                    xs={12}
                    pb={1}
                    justifyContent="center"
                    m={2}
                >
                    <MuiButton
                        size="large"
                        variant="contained"
                        color="primary"
                        href={video}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See Instructional Video
                    </MuiButton>
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
                        href={`/instructions/${id}/level-${Math.max(pathLevelToNumber(level) - 1, 1)}`}
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
                        href={`/instructions/${id}/level-${Math.min(pathLevelToNumber(level), 10)}`}
                    >
                        Next
                    </MuiButton>
                </MuiGrid>
            </MuiGrid>
        </MuiContainer>
    )
}

export default WorkoutInstructionsPage
