"use client"

import React, {
    Children,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react"

import { MuiButton, MuiGrid } from "@/modules/components/library/mui"

import FormBreadcrumbs from "../Breadcrumbs/Breadcrumbs"

const FormStepper = ({
    children = <></>,
    activeStep,
    setActiveStep,
}: {
    children?: ReactNode
    activeStep: number
    setActiveStep: Dispatch<SetStateAction<number>>
}) => {
    const childrenArray = Children.toArray(children)

    const currentChild = childrenArray[activeStep]

    const isLastStep = () => activeStep === childrenArray.length - 1
    const isFirstStep = () => activeStep === 0

    return (
        <>
            <FormBreadcrumbs activeStep={activeStep} />
            <MuiGrid container spacing={2} justifyContent="space-between">
                <MuiGrid item>
                    <MuiButton
                        variant="contained"
                        type="button"
                        disabled={isFirstStep()}
                        onClick={() =>
                            setActiveStep((currentStep) => currentStep - 1)
                        }
                    >
                        Prev
                    </MuiButton>
                </MuiGrid>
                <MuiGrid item>
                    <MuiButton
                        variant="contained"
                        type="button"
                        disabled={isLastStep()}
                        onClick={() =>
                            setActiveStep((currentStep) => currentStep + 1)
                        }
                    >
                        Next
                    </MuiButton>
                </MuiGrid>
            </MuiGrid>

            {currentChild}
        </>
    )
}

export default FormStepper
