import { z } from "zod"
import { type WorkoutOverview } from "@/modules/model/api/routes/instructions-id/outputs/workout-instructions-schema"
import workoutInstructions, {
    type Instruction,
} from "@/modules/model/api/routes/instructions-id/data"
import { pathLevelToNumber } from "@/modules/strings/transform"
import { levelArray } from "@/modules/model/api/routes/instructions-id-level/constants/levels"
import { workoutOverviewDescriptions } from "@/modules/model/api/routes/instructions-id/constants/workoutOverviewDescriptions"
import {
    type WorkoutIds,
    WORKOUT_ID_LIST,
} from "@/modules/model/api/routes/shared/workout-ids"

const paramsSchema = z.object({
    level: z.enum(levelArray),
    name: z.enum(WORKOUT_ID_LIST),
})

export type InstructionParams = Partial<z.input<typeof paramsSchema>>

class ParseInstructions {
    params: InstructionParams

    constructor(params: InstructionParams) {
        this.params = params
    }

    private static filterById(id: WorkoutIds): Instruction[] {
        const workoutIdInstructions = workoutInstructions.filter(
            ({ workoutId }) => workoutId === id
        )

        if (!workoutIdInstructions.length) {
            throw new Error(`Workout instructions for id: ${id} not found`)
        }
        return workoutIdInstructions
    }

    private static mapWorkoutLevelNames(id: WorkoutIds): string[] {
        return ParseInstructions.filterById(id).map(
            (instruction) => instruction.name
        )
    }

    public parseWorkoutOverview(): WorkoutOverview {
        const workoutId = paramsSchema
            .pick({ name: true })
            .parse(this.params).name
        const workoutTitle = workoutOverviewDescriptions[workoutId]

        const levelNames = ParseInstructions.mapWorkoutLevelNames(workoutId)

        return {
            ...workoutTitle,
            levelNames,
        }
    }

    public filterByLevel(): Instruction {
        const parsedParams = paramsSchema.parse(this.params)
        const workoutLevelInstructions = ParseInstructions.filterById(
            parsedParams.name
        ).find(
            (instruction) =>
                instruction.level === pathLevelToNumber(parsedParams.level)
        )

        if (!workoutLevelInstructions) {
            throw new Error(
                `Workout instructions for level: ${parsedParams.level} not found`
            )
        }
        return workoutLevelInstructions
    }

    public findLevelGoal(): number {
        const parsedParams = paramsSchema.parse(this.params)
        const workoutLevelInstructions = ParseInstructions.filterById(
            parsedParams.name
        ).find(
            (instruction) =>
                instruction.level === pathLevelToNumber(parsedParams.level)
        )

        if (!workoutLevelInstructions) {
            throw new Error(
                `Workout instructions for level: ${parsedParams.level} not found`
            )
        }
        return (
            workoutLevelInstructions.progressions.advanced.sets *
            workoutLevelInstructions.progressions.advanced.reps
        )
    }
}

export default ParseInstructions
