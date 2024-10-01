import { type GetStaticPaths, type Metadata } from "next"
import Link from "next/link"
import {
    MuiButton,
    MuiContainer,
    MuiGrid,
    MuiTypography,
} from "@/modules/components/library/mui"
import * as colors from "@/styles/colors/_exports.module.scss"
import { createMetadata } from "@/modules/seo/create-metadata"
import {
    MuiChevronLeftIcon,
    MuiChevronRightIcon,
} from "@/modules/components/library/mui/mui-icons"
import { urlFor } from "@/modules/cms/client/image"
import { pathLevelToNumber } from "@/modules/strings/transform"
import { levelUrls } from "@/modules/model/urls/levels"
import { CmsClient } from "@/modules/cms/client/client"
import { type WorkoutTypeIds } from "@/modules/model/workout/workout-schemas"
import Progressions from "./components/Progressions/Progressions"
import InstructionsCard from "./components/InstructionsCard/InstructionsCard"
import InstructionsDropdownTitle from "./components/InstructionsDropdownTitle/InstructionsDropdownTitle"

type Params = {
    id: WorkoutTypeIds
    level: string
}

const paths = (await CmsClient.getExerciseIds()).flatMap(({ _id }) =>
    levelUrls.map((level) => ({ params: { id: _id, level } }))
)

export const getStaticPaths = (async () => ({
    paths,
    fallback: false,
})) satisfies GetStaticPaths

export async function generateMetadata({
    params: { id, level },
}: {
    params: Params
}): Promise<Metadata> {
    const data = await CmsClient.getExerciseStep(id, pathLevelToNumber(level))
    return createMetadata({
        title: `${data.name}`,
        description: `Instructions for the workout ${data.name} at level ${level} - ${data.name}.`,
    })
}

async function WorkoutInstructionsPage({
    params: { id, level },
}: {
    params: Params
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
    } = await CmsClient.getExerciseStep(id, pathLevelToNumber(level))

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
                    justifyContent={"center"}
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
