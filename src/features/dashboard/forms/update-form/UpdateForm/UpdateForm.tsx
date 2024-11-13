"use client"

import { useFormContext } from "react-hook-form"

import { type UpdateWorkoutDataInput } from "@/@types/forms/forms-types"
import { MuiGrid } from "@/components/libs/mui"

import useOnSubmit from "../hooks/use-on-submit"

function UpdateForm({ children }: { children: React.ReactNode }) {
    const { handleSubmit } = useFormContext<UpdateWorkoutDataInput>()

    const onSubmit = useOnSubmit()

    return (
        <MuiGrid
            container
            spacing={2}
            mt={2}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            {children}
        </MuiGrid>
    )
}

export default UpdateForm
