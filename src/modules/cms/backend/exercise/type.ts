import { defineType } from "sanity"

import { descriptionField } from "./fields/description"
import { imageField } from "./fields/image"
import { titleField } from "./fields/title"
import { stepsField } from "./steps/steps"

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
