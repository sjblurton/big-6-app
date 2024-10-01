import { MuiGrid } from "@/modules/components/library/mui"
import { pathLevelToNumber } from "@/modules/strings/transform"
import { levelUrls } from "@/modules/model/urls/levels"
import { CmsClient } from "@/modules/cms/client/client"
import { type WorkoutTypeIds } from "@/modules/model/workout/workout-schemas"
import DropdownLinks from "./DropdownLinks/DropdownLinks"

type Props = {
    id: WorkoutTypeIds
    level: string
}

async function InstructionsDropdownTitle({ level, id }: Props) {
    const exerciseIds = await CmsClient.getExerciseIds()

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
