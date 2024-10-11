import { useFormContext } from "react-hook-form"

import { type CreateWorkoutDataOutput } from "@/modules/model/workout/workout-schemas"

export function useCreateFormContextOutputs() {
    const methods = useFormContext<CreateWorkoutDataOutput>()
    return methods
}
