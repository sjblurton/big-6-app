import { useFormContext, useWatch } from "react-hook-form"

import {
    type CreateWorkoutDataInput,
    type CreateWorkoutDataOutput,
} from "@/@types/forms/forms-types"

export function useCreateFormContextOutputs() {
    const methods = useFormContext<CreateWorkoutDataOutput>()
    return methods
}

export function useCreateFormContextInputsWithStep() {
    const { control, ...rest } = useFormContext<CreateWorkoutDataInput>()

    const currentStep = useWatch({
        name: "metadata.step.current",
        control,
    })
    return { control, currentStep, ...rest }
}

export function useCreateFormContextInputs() {
    return useFormContext<CreateWorkoutDataInput>()
}
