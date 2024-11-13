"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { type CreateWorkoutDataOutput } from "@/@types/forms/forms-types"
import { type WorkoutData } from "@/@types/workouts/workout-types"
import { MuiBox } from "@/components/libs/mui"
import { workoutAxiosClient } from "@/libs/cms/clients/workouts-axios-client"

import FormBreadcrumbs from "../Breadcrumbs/Breadcrumbs"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
import DetailsStep from "../DetailsStep/DetailsStep"
import FormStepper from "../FormStepper/FormStepper"
import { useCreateFormContextOutputs } from "../hooks/use-create-form-context"
import LevelsRadio from "../LevelsRadio/LevelsRadio"
import WorkoutRadio from "../WorkoutRadio/WorkoutRadio"

function CreateForm() {
    const router = useRouter()

    const {
        handleSubmit,
        // formState: { errors },
    } = useCreateFormContextOutputs()

    const {
        mutateAsync,
        isError,
        error,
        // data: responseData,
    } = useMutation({
        mutationFn: (data: CreateWorkoutDataOutput) =>
            workoutAxiosClient.postWorkout(data),
        onSuccess: ({ id }: WorkoutData) => {
            router.push(`dashboard/workouts/${id}`)
        },
    })

    if (isError) {
        throw error
    }

    const onSubmit = async (data: CreateWorkoutDataOutput) => {
        const response = await mutateAsync(data)
        return response
    }
    return (
        <MuiBox
            component="form"
            data-testid="form"
            pt={2}
            pb={10}
            sx={{
                height: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormBreadcrumbs />
            <FormStepper>
                <WorkoutRadio />
                <LevelsRadio />
                <DetailsStep />
            </FormStepper>
            <ButtonGroup />
        </MuiBox>
    )
}

export default CreateForm
