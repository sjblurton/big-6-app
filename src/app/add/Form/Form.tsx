"use client"

import { useState } from "react"

import { MuiBox } from "@/modules/components/library/mui"
import { type CreateWorkoutDataOutput } from "@/modules/model/workout/workout-schemas"

import FormStepper from "./FormStepper/FormStepper"
import { useCreateFormContextOutputs } from "./hooks/use-create-form-context"
import DetailsStep from "./steps/DetailsStep/DetailsStep"
import LevelsRadio from "./steps/LevelsRadio/LevelsRadio"
import WorkoutRadio from "./steps/WorkoutRadio/WorkoutRadio"

const onSubmit = (data: CreateWorkoutDataOutput) => Promise.resolve(data)

function Form() {
    const [activeStep, setActiveStep] = useState(0)
    const { handleSubmit } = useCreateFormContextOutputs()

    return (
        <MuiBox
            component="form"
            mt={3}
            sx={{ height: "100%" }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormStepper activeStep={activeStep} setActiveStep={setActiveStep}>
                <WorkoutRadio />
                <LevelsRadio />
                <DetailsStep />
            </FormStepper>
        </MuiBox>
    )
}

export default Form
