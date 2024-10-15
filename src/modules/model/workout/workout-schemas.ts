import { generateSchema } from "@anatine/zod-openapi"
import { z } from "zod"

const pullUpId = "06d64c6a-4d31-435a-b415-782816c446fd"
const bridgeId = "316b2f69-1a2f-4611-8891-bfa754e1b2c5"
const handstandId = "3c93b151-0646-409f-bd81-1bd39944cad8"
const legRaiseId = "8d67a779-ba3b-4643-a7f8-4ea021cc6615"
const pushUpId = "8e21abc2-3d10-43bf-8635-a8341cebba9e"
const squatId = "d0ed1640-1b24-432a-80ab-03ded1eaa1aa"

export const workoutTypes = {
    pullUp: { id: pullUpId, name: "Pull Up" },
    bridge: { id: bridgeId, name: "Bridge" },
    handstand: { id: handstandId, name: "Handstand" },
    legRaise: { id: legRaiseId, name: "Leg Raise" },
    pushUp: { id: pushUpId, name: "Push Up" },
    squat: { id: squatId, name: "Squat" },
} as const

export type WorkoutExercisesKey = keyof typeof workoutTypes

export const workoutTypeIdsUnion = z.union([
    z.literal(pullUpId),
    z.literal(bridgeId),
    z.literal(handstandId),
    z.literal(legRaiseId),
    z.literal(pushUpId),
    z.literal(squatId),
])

export const openApiWorkoutIdsSchema = generateSchema(workoutTypeIdsUnion)

export const repsSchema = z.number().min(1).max(200).int()

export const workoutSchema = z.object({
    id: z.string(),
    date: z.number(),
    reps: repsSchema.array().max(100).min(1),
    level: z.number().min(1).max(10).int(),
    type: workoutTypeIdsUnion,
    comments: z.string().optional(),
    user: z.string().email(),
})

export const createWorkoutSchema = z
    .object({
        workout: workoutSchema
            .omit({ id: true, level: true, reps: true })
            .extend({
                level: z.string().regex(/^[1-9]|10$/),
                reps: z
                    .object({ value: z.number().min(1).max(200) })
                    .array()
                    .max(100)
                    .min(1),
            }),
        meta: z.object({
            step: z.object({
                current: z.number().int(),
                total: z.number().int(),
            }),
        }),
    })
    .transform((data) =>
        workoutSchema.omit({ id: true }).parse({
            ...data.workout,
            level: Number.parseInt(data.workout.level, 10),
            reps: data.workout.reps.map((rep) => rep.value),
        })
    )

export type CreateWorkoutDataInput = z.input<typeof createWorkoutSchema>
export type CreateWorkoutDataOutput = z.output<typeof createWorkoutSchema>

export type WorkoutTypeIds = z.infer<typeof workoutTypeIdsUnion>

export type WorkoutData = z.infer<typeof workoutSchema>

export function getExerciseNameById(id: WorkoutTypeIds): string {
    const value = Object.values(workoutTypes).find(
        (exercise) => exercise.id === id
    )
    if (!value) {
        throw new Error(`No exercise found for id: ${id}`)
    }
    return value.name
}
