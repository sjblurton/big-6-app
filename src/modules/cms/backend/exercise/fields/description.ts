import { defineField } from "sanity"

export const descriptionField = defineField({
    type: "text",
    name: "description",
    title: "Description",
    description: "The overview description of the exercise as a whole.",
    validation: (Rule) => Rule.required().max(500),
})
