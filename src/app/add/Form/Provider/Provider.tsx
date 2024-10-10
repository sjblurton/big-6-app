"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {
    type FieldValues,
    FormProvider as ReactHookFormProvider,
    useForm,
} from "react-hook-form"

import { createWorkoutSchema } from "@/modules/model/workout/workout-schemas"

function FormProvider<FormData extends FieldValues>({
    children,
}: {
    children: React.ReactNode
}) {
    const methods = useForm<FormData>({
        resolver: zodResolver(createWorkoutSchema),
    })

    return (
        <ReactHookFormProvider {...methods}>{children}</ReactHookFormProvider>
    )
}

export default FormProvider
