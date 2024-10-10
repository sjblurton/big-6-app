import { useFormContext } from "react-hook-form"

import { type CreateWorkoutData } from "@/modules/model/workout/workout-schemas"

function useCreateFormContext() {
    const methods = useFormContext<CreateWorkoutData>()
    return methods
}

export default useCreateFormContext
