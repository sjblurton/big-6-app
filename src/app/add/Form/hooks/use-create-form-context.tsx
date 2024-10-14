import { useFormContext, useWatch } from "react-hook-form"

import {
    type CreateWorkoutDataInput,
    type CreateWorkoutDataOutput,
} from "@/modules/model/workout/workout-schemas"

export function useCreateFormContextOutputs() {
    const methods = useFormContext<CreateWorkoutDataOutput>()
    return methods
}

export function useCreateFormContextInputs() {
    const { control, ...rest } = useFormContext<CreateWorkoutDataInput>()

    const currentStep = useWatch({
        name: "meta.step.current",
        control,
    })
    return { control, currentStep, ...rest }
}
