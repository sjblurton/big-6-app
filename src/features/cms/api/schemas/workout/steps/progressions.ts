import { defineField } from "sanity"

import { PROGRESSION_STAGES } from "@/constants/strings/progression-stages"
import { toCapitalizedWords } from "@/utils/strings/transform"

export const progressionField = defineField({
    type: "object",
    name: "progression",
    title: "Progression",
    fields: [
        {
            type: "string",
            name: "stage",
            title: "Stage",
            description: "The stage of the workout progression",
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    PROGRESSION_STAGES.beginner,
                    PROGRESSION_STAGES.intermediate,
                    PROGRESSION_STAGES.advanced,
                ],
            },
        },
        {
            type: "boolean",
            name: "isSeconds",
            title: "Is Seconds",
            description: "Whether the reps are in seconds instead of reps",
            initialValue: false,
            validation: (Rule) => Rule.required(),
        },
        {
            type: "number",
            name: "sets",
            title: "Sets",
            description: "The number of sets to progress",
        },
        {
            type: "number",
            name: "reps",
            title: "Reps or Seconds",
            description: "The number of reps or seconds to progress",
        },
    ],
    preview: {
        select: {
            stage: "stage",
            isSeconds: "isSeconds",
            sets: "sets",
            reps: "reps",
        },
        prepare: ({ stage, isSeconds, sets, reps }) => {
            const repsOrSeconds = isSeconds ? "Second" : "Rep"
            return {
                title: toCapitalizedWords(stage),
                subtitle: `${sets} ${sets > 1 ? "sets" : "set"} of ${reps} ${reps > 1 ? `${repsOrSeconds}s` : repsOrSeconds}`,
            }
        },
    },
})
