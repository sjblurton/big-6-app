"use client"

import { useMutation } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"

import { type UpdateWorkoutDataOutput } from "@/@types/forms/forms-types"
import { workoutAxiosClient } from "@/libs/cms/clients/workouts-axios-client"
import { workoutSchema } from "@/schemas/workouts"

function useOnSubmit() {
    const router = useRouter()
    const { id } = useParams()

    const { mutateAsync, isError, error } = useMutation({
        mutationFn: (data: UpdateWorkoutDataOutput) => {
            if (typeof id !== "string") throw new Error("No id provided")

            return workoutAxiosClient.putWorkout(data, id)
        },
        onSuccess: () => {
            router.push(`/dashboard/workouts/${id}`)
        },
    })

    if (isError) {
        throw error
    }

    const onSubmit = async (data: unknown) => {
        const safeData = workoutSchema.partial().parse(data)

        const response = await mutateAsync(safeData)
        return response
    }

    return onSubmit
}

export default useOnSubmit
