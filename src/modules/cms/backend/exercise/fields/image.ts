import { defineField } from "sanity"

export const imageField = defineField({
    type: "image",
    name: "image",
    title: "Image",
    description: "The image of the exercise",
    validation: (Rule) => Rule.required(),
})
