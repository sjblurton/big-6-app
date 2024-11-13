import { useRouter } from "next/navigation"
import { useState } from "react"

import { ROUTES } from "@/constants/strings/routes"

import { useCreateFormContextInputs } from "../../hooks/use-create-form-context"

function useHandleButtons() {
    const [isLoading, setIsLoading] = useState(false)
    const { trigger, getValues, setValue, reset } = useCreateFormContextInputs()
    const router = useRouter()
    const currentStepDotString = "meta.step.current"
    const currentStep = getValues(currentStepDotString)

    const triggerValidation = async () => {
        setIsLoading(true)

        const triggerStep = currentStep === 0 ? "workout.type" : "workout.level"

        const validStep = await trigger(triggerStep)
        setIsLoading(false)
        if (!validStep) {
            return
        }

        setValue(currentStepDotString, currentStep + 1)
    }

    const handleNext = async () => {
        const maxStep = getValues("meta.step.total") - 1

        if (currentStep === maxStep) return

        return triggerValidation()
    }

    const handlePrevious = () => {
        if (currentStep === 0) return
        setValue(currentStepDotString, currentStep - 1)
    }

    const handleCancel = () => {
        reset()
        router.push(ROUTES.dashboard.value)
    }

    return { handleNext, handlePrevious, handleCancel, isLoading }
}

export default useHandleButtons
