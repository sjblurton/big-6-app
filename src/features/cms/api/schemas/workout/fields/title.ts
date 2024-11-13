import { defineField } from "sanity"

import { WORKOUT_DETAILS } from "@/constants/strings/workout-details"

export const titleField = defineField({
    name: "name",
    title: "Name",
    type: "string",
    description: "The name of the workout",
    options: {
        list: [
            WORKOUT_DETAILS.pushUp,
            WORKOUT_DETAILS.pullUp,
            WORKOUT_DETAILS.squat,
            WORKOUT_DETAILS.legRaise,
            WORKOUT_DETAILS.handstand,
            WORKOUT_DETAILS.bridge,
        ],
    },
    validation: (Rule) => Rule.required(),
})
