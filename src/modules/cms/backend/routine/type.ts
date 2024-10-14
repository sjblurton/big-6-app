import { defineField, defineType } from "sanity"

import { weekDays } from "@/modules/constants/week-days"
import { toCapitalizedWords } from "@/modules/strings/transform"

const routineType = defineType({
    title: "Routines",
    name: "routine-document",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            description: "The name of the routine",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "rest",
            title: "Rest Day Image",
            type: "image",
            description: "The image for the rest day",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "days",
            title: "Days",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "name",
                            title: "Name",
                            type: "string",
                            description: "The name of the day",
                            options: {
                                list: [
                                    weekDays.monday,
                                    weekDays.tuesday,
                                    weekDays.wednesday,
                                    weekDays.thursday,
                                    weekDays.friday,
                                    weekDays.saturday,
                                    weekDays.sunday,
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "exercises",
                            title: "Exercises",
                            type: "array",
                            of: [
                                {
                                    type: "reference",
                                    to: [{ type: "exercise-document" }],
                                },
                            ],
                            validation: (Rule) =>
                                Rule.required().min(1).unique(),
                        }),
                    ],
                    preview: {
                        select: {
                            name: "name",
                        },
                        prepare({ name }) {
                            return {
                                title: toCapitalizedWords(name),
                            }
                        },
                    },
                },
            ],
            validation: (Rule) =>
                Rule.required()
                    .min(1)
                    .max(7)
                    .custom((days: { name: string }[] | undefined) => {
                        if (!days) return true
                        const dayNames = days.map(({ name }) => name)
                        const uniqueDayNames = [...new Set(dayNames)]
                        return dayNames.length === uniqueDayNames.length
                            ? true
                            : "Can not have the same day more than once"
                    }),
        }),
    ],
})

export default routineType
