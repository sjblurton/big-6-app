import { defineType } from "sanity"
import { titleField } from "./fields/title"
import { descriptionField } from "./fields/description"
import { stepsField } from "./steps/steps"
import { imageField } from "./fields/image"

const exerciseType = defineType({
    title: "Exercise",
    name: "exercise-document",
    type: "document",
    fields: [titleField, imageField, descriptionField, stepsField],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
})

export default exerciseType
