import { z } from "zod"

import { exerciseNames } from "@/modules/contants/exercise-names"
import { weekDays } from "@/modules/contants/week-days"

import { documentBaseSchema, imageSchema } from "../shared/base-schemas"

const exerciseSchema = z.object({
    _id: z.string(),
    image: imageSchema,
    name: z.enum([
        exerciseNames.bridge.value,
        exerciseNames.handstand.value,
        exerciseNames.legRaise.value,
        exerciseNames.pullUp.value,
        exerciseNames.pushUp.value,
        exerciseNames.squat.value,
        "rest",
    ]),
})

const daySchema = z.object({
    name: z.enum([
        weekDays.monday.value,
        weekDays.tuesday.value,
        weekDays.wednesday.value,
        weekDays.thursday.value,
        weekDays.friday.value,
        weekDays.saturday.value,
        weekDays.sunday.value,
    ]),
    _key: z.string(),
    exercises: exerciseSchema.array(),
})

export const routineDocumentSchema = documentBaseSchema.extend({
    rest: imageSchema,
    _type: z.literal("routine-document"),
    name: z.string(),
    days: daySchema.array(),
})

export type RoutineDocument = z.infer<typeof routineDocumentSchema>

export type RoutineDay = z.infer<typeof daySchema>
