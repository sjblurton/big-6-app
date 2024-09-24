import { defineField } from "sanity"
import { stepField } from "./step"

export const stepsField = defineField({
    type: "array",
    name: "steps",
    title: "Steps",
    description: "The steps of the exercise",
    of: [stepField],
    validation: (Rule) =>
        Rule.required()
            .length(10)
            .unique()
            .custom((steps: { name: string }[] | undefined) => {
                if (!steps) {
                    return true
                }
                const names = steps.map((step) => step.name)
                const uniqueNames = new Set(names)
                if (names.length !== uniqueNames.size) {
                    return "Each step must have a unique name"
                }
                return true
            })
            .custom((steps: { step: number }[] | undefined) => {
                if (!steps) {
                    return true
                }
                const stepNumbers = steps.map((step) => step.step)
                const uniqueStepNumbers = new Set(stepNumbers)
                if (stepNumbers.length !== uniqueStepNumbers.size) {
                    return "Each step must have a unique step number"
                }
                return true
            }),
})
