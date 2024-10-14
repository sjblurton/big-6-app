"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { workoutAxiosClient } from "@/modules/api/client/workouts"
import { MuiBox } from "@/modules/components/library/mui"
import {
    type CreateWorkoutDataOutput,
    type WorkoutData,
} from "@/modules/model/workout/workout-schemas"

import FormBreadcrumbs from "./Breadcrumbs/Breadcrumbs"
import ButtonGroup from "./ButtonGroup/ButtonGroup"
import FormStepper from "./FormStepper/FormStepper"
import { useCreateFormContextOutputs } from "./hooks/use-create-form-context"
import DetailsStep from "./steps/DetailsStep/DetailsStep"
import LevelsRadio from "./steps/LevelsRadio/LevelsRadio"
import WorkoutRadio from "./steps/WorkoutRadio/WorkoutRadio"

function Form() {
    const router = useRouter()
    const { handleSubmit } = useCreateFormContextOutputs()
    const { mutateAsync } = useMutation({
        mutationFn: (data: CreateWorkoutDataOutput) =>
            workoutAxiosClient.postWorkout(data),
        onSuccess: ({ id }: WorkoutData) => {
            router.push(`/workouts/${id}`)
        },
    })

    const onSubmit = async (data: CreateWorkoutDataOutput) => {
        const response = await mutateAsync(data)
        return response
    }
    return (
        <MuiBox
            component="form"
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

export default Form
