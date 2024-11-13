import { type WorkoutTypeIds } from "@/@types/workouts/workout-types"
import { MuiGrid } from "@/components/libs/mui"
import { LEVELS_ARRAY } from "@/constants/strings/levels-details"
import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"
import { pathLevelToNumber } from "@/utils/strings/transform"

import DropdownLinks from "./DropdownLinks/DropdownLinks"

type Properties = {
    id: WorkoutTypeIds
    level: string
}

async function InstructionsDropdownTitle({ level, id }: Properties) {
    const exerciseIds = await workoutCmsClient.getExerciseIds()

    return (
        <MuiGrid container justifyContent="center" gap={2}>
            <MuiGrid item>
                <DropdownLinks
                    options={exerciseIds.map(({ name, _id: type }) => ({
                        label: name,
                        href: `/instructions/${type}/${level}`,
                    }))}
                    defaultIndex={exerciseIds.findIndex(
                        ({ _id: exerciseId }) => exerciseId === id
                    )}
                />
            </MuiGrid>
            <MuiGrid item>
                <DropdownLinks
                    options={LEVELS_ARRAY.map(({ name, title }) => ({
                        label: title,
                        href: `/instructions/${id}/${name}`,
                    }))}
                    defaultIndex={pathLevelToNumber(level) - 1}
                />
            </MuiGrid>
        </MuiGrid>
    )
}

export default InstructionsDropdownTitle
