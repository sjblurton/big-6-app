import { renderHook } from "@testing-library/react"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"

import { useCreateFormContextOutputs } from "./use-create-form-context"

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm()
    return <FormProvider {...methods}>{children}</FormProvider>
}

describe("useCreateFormContextOutputs", () => {
    it("should return form methods for CreateWorkoutDataOutput", () => {
        const { result } = renderHook(() => useCreateFormContextOutputs(), {
            wrapper: FormWrapper,
        })

        expect(result.current).toHaveProperty("control")
        expect(result.current).toHaveProperty("getValues")
        expect(result.current).toHaveProperty("setValue")
        expect(result.current).toHaveProperty("watch")
    })
})
