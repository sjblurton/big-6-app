import { defineField } from "sanity"

import { progressionField } from "./progressions"

const stepFields = [
    defineField({
        group: "title",
        type: "number",
        name: "step",
        title: "Step",
        description: "The step of the workout",
        validation: (Rule) => Rule.required().min(1).max(10).integer(),
    }),
    defineField({
        group: "title",
        type: "string",
        name: "name",
        title: "Name",
        description: "The name of the workout at the current step",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        group: "directions",
        type: "text",
        name: "positive",
        title: "Positive",
        description: "The positive directions for the workout",
        rows: 3,
        validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
        group: "directions",
        type: "image",
        name: "positiveImage",
        title: "Image of the Positive",
        description: "The image of the positive directions for the workout",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        group: "directions",
        type: "text",
        name: "negative",
        title: "Negative",
        description: "The negative directions for the workout",
        rows: 3,
        validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
        group: "directions",
        type: "image",
        name: "negativeImage",
        title: "Image of the Negative",
        description: "The image of the negative directions for the workout",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        group: "directions",
        type: "string",
        name: "video",
        title: "Video",
        description: "The video for the workout",
        validation: (Rule) => Rule.required(),
    }),

    defineField({
        group: "progressions",
        type: "array",
        name: "progressions",
        title: "Progressions",
        description: "The progressions for the workout",
        of: [progressionField],
        validation: (Rule) => [
            Rule.required()
                .length(3)
                .custom((progressions: { stage: string }[] | undefined) => {
                    if (!progressions) {
                        return true
                    }
                    const stages = progressions.map(
                        (progression) => progression.stage
                    )
                    const uniqueStages = new Set(stages)
                    if (stages.length !== uniqueStages.size) {
                        return "Each progression must have a unique stage"
                    }
                    return true
                }),
        ],
    }),
]

export const stepField = defineField({
    type: "object",
    groups: [
        {
            title: "Title",
            name: "title",
        },
        {
            title: "Directions",
            name: "directions",
        },
        {
            title: "Progressions",
            name: "progressions",
        },
    ],
    name: "step",
    title: "Step",
    description: "The step of the workout",
    fields: stepFields,
    validation: (Rule) => Rule.required(),
    preview: {
        select: {
            title: "name",
            subtitle: "step",
            media: "positiveImage",
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: `Step ${selection.subtitle}`,
                media: selection.media,
            }
        },
    },
})
