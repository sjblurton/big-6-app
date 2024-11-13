import { type z } from "zod"

import {
    type createWorkoutSchema,
    type updateWorkoutSchema,
} from "@/schemas/forms"

export type CreateWorkoutDataInput = z.input<typeof createWorkoutSchema>
export type CreateWorkoutDataOutput = z.output<typeof createWorkoutSchema>

export type UpdateWorkoutDataInput = z.input<typeof updateWorkoutSchema>
export type UpdateWorkoutDataOutput = z.output<typeof updateWorkoutSchema>
