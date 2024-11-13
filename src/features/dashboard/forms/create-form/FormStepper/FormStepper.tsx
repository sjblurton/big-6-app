"use client"

import React, { Children, type ReactNode } from "react"

import { useCreateFormContextInputsWithStep } from "../hooks/use-create-form-context"

const FormStepper = ({ children = <></> }: { children?: ReactNode }) => {
    const { currentStep } = useCreateFormContextInputsWithStep()
    const childrenArray = Children.toArray(children)

    const currentChild = childrenArray[currentStep]

    return <>{currentChild}</>
}

export default FormStepper
