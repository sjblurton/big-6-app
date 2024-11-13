"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider as ReactHookFormProvider, useForm } from "react-hook-form"

import { type UpdateWorkoutDataInput } from "@/@types/forms/forms-types"
import { type FetchWorkOutSummery } from "@/libs/cms/clients/workouts-fetch-client"
import { updateWorkoutSchema } from "@/schemas/forms"

function UpdateFormProvider({
    children,
    workoutSummery,
}: {
    children: React.ReactNode
    workoutSummery: FetchWorkOutSummery
}) {
    const defaultValues: Partial<UpdateWorkoutDataInput> = {
        workout: {
            ...workoutSummery.workout,
            level: workoutSummery.workout.level.toString(),
        },
        metadata: workoutSummery.step,
    }

    const methods = useForm<UpdateWorkoutDataInput>({
        resolver: zodResolver(updateWorkoutSchema),
        defaultValues,
    })

    return (
        <ReactHookFormProvider {...methods}>{children}</ReactHookFormProvider>
    )
}

export default UpdateFormProvider
