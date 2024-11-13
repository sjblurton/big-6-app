"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider as ReactHookFormProvider, useForm } from "react-hook-form"

import { type CreateWorkoutDataInput } from "@/@types/forms/forms-types"
import { createWorkoutSchema } from "@/schemas/forms"
import { type DeepPartial } from "@/utils/typescript/utility-types"

function CreateFormProvider({
    children,
    defaultValues,
}: {
    children: React.ReactNode
    defaultValues?: DeepPartial<CreateWorkoutDataInput>
}) {
    const methods = useForm<CreateWorkoutDataInput>({
        resolver: zodResolver(createWorkoutSchema),
        defaultValues,
    })

    return (
        <ReactHookFormProvider {...methods}>{children}</ReactHookFormProvider>
    )
}

export default CreateFormProvider
