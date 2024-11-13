import { z } from "zod"

import { weekDays } from "@/constants/strings/week-days"
import { WORKOUT_DETAILS } from "@/constants/strings/workout-details"
import {
    documentBaseSchema,
    imageSchema,
} from "@/libs/cms/schemas/base-schemas"

const exerciseSchema = z.object({
    _id: z.string(),
    image: imageSchema,
    name: z.enum([
        WORKOUT_DETAILS.bridge.value,
        WORKOUT_DETAILS.handstand.value,
        WORKOUT_DETAILS.legRaise.value,
        WORKOUT_DETAILS.pullUp.value,
        WORKOUT_DETAILS.pushUp.value,
        WORKOUT_DETAILS.squat.value,
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
