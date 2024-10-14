"use client"

import { MuiBox } from "@/modules/components/library/mui"
import { type CreateWorkoutDataOutput } from "@/modules/model/workout/workout-schemas"

import FormBreadcrumbs from "./Breadcrumbs/Breadcrumbs"
import ButtonGroup from "./ButtonGroup/ButtonGroup"
import FormStepper from "./FormStepper/FormStepper"
import { useCreateFormContextOutputs } from "./hooks/use-create-form-context"
import DetailsStep from "./steps/DetailsStep/DetailsStep"
import LevelsRadio from "./steps/LevelsRadio/LevelsRadio"
import WorkoutRadio from "./steps/WorkoutRadio/WorkoutRadio"

const onSubmit = (data: CreateWorkoutDataOutput) => {
    console.log("Submitted data: ", data)
}

function Form() {
    const { handleSubmit } = useCreateFormContextOutputs()

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
