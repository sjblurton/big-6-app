import {
    MuiBox,
    MuiStep,
    MuiStepLabel,
    MuiStepper,
} from "@/modules/components/library/mui"

const steps = ["Select Exercise", "Select Level", "Log Workout"]

function FormBreadcrumbs({ activeStep }: { activeStep: number }) {
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
