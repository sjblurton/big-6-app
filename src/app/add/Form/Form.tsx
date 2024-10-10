"use client"

import { useState } from "react"

import { MuiBox } from "@/modules/components/library/mui"

import FormStepper from "./FormStepper/FormStepper"
import useCreateFormContext from "./hooks/use-create-form-context"
import LevelsRadio from "./steps/LevelsRadio/LevelsRadio"
import WorkoutRadio from "./steps/WorkoutRadio/WorkoutRadio"

const onSubmit = (data: unknown) => Promise.resolve(data)

function Form() {
    const [activeStep, setActiveStep] = useState(0)
    const { handleSubmit } = useCreateFormContext()

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
                <div>hello world 3</div>
            </FormStepper>
        </MuiBox>
    )
}

export default Form
