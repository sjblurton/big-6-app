import { MuiButton, MuiButtonGroup } from "@/components/libs/mui"

import useHandleButtons from "./hooks/use-handle-buttons"

import { useCreateFormContextInputsWithStep } from "../hooks/use-create-form-context"

function ButtonGroup() {
    const { getValues, currentStep } = useCreateFormContextInputsWithStep()
    const { handleNext, handleCancel, handlePrevious, isLoading } =
        useHandleButtons()

    const isFirstStep = currentStep === 0
    const isLastStep = currentStep === getValues("metadata.step.total") - 1

    return (
        <MuiButtonGroup
            orientation="vertical"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            disabled={isLoading}
        >
            {isLastStep ? (
                <MuiButton variant="contained" type="submit" color="secondary">
                    Submit
                </MuiButton>
            ) : (
                <MuiButton
                    variant="contained"
                    type="button"
                    color="secondary"
                    onClick={handleNext}
                >
                    Next
                </MuiButton>
            )}

            <MuiButton
                variant="contained"
                type="button"
                sx={{ mt: 2 }}
                color="error"
                onClick={handleCancel}
            >
                cancel
            </MuiButton>
            {!isFirstStep && (
                <MuiButton
                    variant="contained"
                    type="button"
                    color="secondary"
                    sx={{ mt: 2 }}
                    onClick={handlePrevious}
                >
                    Prev
                </MuiButton>
            )}
        </MuiButtonGroup>
    )
}

export default ButtonGroup
