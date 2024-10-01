import { defineField } from "sanity"

import { exerciseList } from "../lists/exercises"

export const titleField = defineField({
    name: "name",
    title: "Name",
    type: "string",
    description: "The name of the exercise",
    options: {
        list: exerciseList,
    },
    validation: (Rule) => Rule.required(),
})
