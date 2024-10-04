import { defineField } from "sanity"

import { exerciseNames } from "@/modules/contants/exercise-names"

export const titleField = defineField({
    name: "name",
    title: "Name",
    type: "string",
    description: "The name of the exercise",
    options: {
        list: [
            exerciseNames.pushUp,
            exerciseNames.pullUp,
            exerciseNames.squat,
            exerciseNames.legRaise,
            exerciseNames.handstand,
            exerciseNames.bridge,
        ],
    },
    validation: (Rule) => Rule.required(),
})
