import { MuiGrid } from "@/modules/components/library/mui"
import { pathLevelToNumber } from "@/modules/strings/transform"
import { levelUrls } from "@/modules/model/urls/levels"
import { SanityClient } from "@/modules/sanity/lib/client"
import { type WorkoutIds } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"
import DropdownLinks from "./DropdownLinks/DropdownLinks"

type Props = {
    id: WorkoutIds
    level: string
}

async function InstructionsDropdownTitle({ level, id }: Props) {
    const exerciseIds = await SanityClient.getExerciseIds()

    return (
        <MuiGrid container justifyContent="center" gap={2}>
            <MuiGrid item>
                <DropdownLinks
                    options={exerciseIds.map(({ name, _id: workoutId }) => ({
                        label: name,
                        href: `/instructions/${workoutId}/${level}`,
                    }))}
                    defaultIndex={exerciseIds.findIndex(
                        ({ _id: exerciseId }) => exerciseId === id
                    )}
                />
            </MuiGrid>
            <MuiGrid item>
                <DropdownLinks
                    options={levelUrls.map((levelLink) => ({
                        label: levelLink,
                        href: `/instructions/${id}/${levelLink}`,
                    }))}
                    defaultIndex={pathLevelToNumber(level) - 1}
                />
            </MuiGrid>
        </MuiGrid>
    )
}

export default InstructionsDropdownTitle
