import { defineType } from "sanity"

import { toCapitalizedWords } from "@/modules/strings/transform"

import { descriptionField } from "./fields/description"
import { imageField } from "./fields/image"
import { titleField } from "./fields/title"
import { stepsField } from "./steps/steps"

const exerciseType = defineType({
    title: "Exercises",
    name: "exercise-document",
    type: "document",
    fields: [titleField, imageField, descriptionField, stepsField],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
        prepare({ title, media }) {
            return {
                title: toCapitalizedWords(title),
                media,
            }
        },
    },
})

export default exerciseType
