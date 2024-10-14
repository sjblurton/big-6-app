import { useWatch } from "react-hook-form"

import {
    MuiBox,
    MuiStep,
    MuiStepLabel,
    MuiStepper,
} from "@/modules/components/library/mui"

import { useCreateFormContextInputs } from "../hooks/use-create-form-context"

const steps = ["Select Exercise", "Select Level", "Log Workout"] as const

function FormBreadcrumbs() {
    const { control } = useCreateFormContextInputs()
    const activeStep = useWatch({
        name: "meta.step.current",
        control,
    })

    return (
        <MuiBox sx={{ width: "100%" }}>
            <MuiStepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <MuiStep key={label}>
                        <MuiStepLabel>{label}</MuiStepLabel>
                    </MuiStep>
                ))}
            </MuiStepper>
        </MuiBox>
    )
}

export default FormBreadcrumbs
