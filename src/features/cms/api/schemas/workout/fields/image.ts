import { defineField } from "sanity"

export const imageField = defineField({
    type: "image",
    name: "image",
    title: "Image",
    description: "The image of the workout",
    validation: (Rule) => Rule.required(),
})
