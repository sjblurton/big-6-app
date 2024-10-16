"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DateTime } from "luxon"
import { FormProvider as ReactHookFormProvider, useForm } from "react-hook-form"

import {
    type CreateWorkoutDataInput,
    createWorkoutSchema,
} from "@/modules/model/workout/workout-schemas"
import { type DeepPartial } from "@/modules/typescript/utility-types"

function FormProvider({
    children,
    defaultValues,
}: {
    children: React.ReactNode
    defaultValues?: DeepPartial<CreateWorkoutDataInput>
}) {
    const methods = useForm<CreateWorkoutDataInput>({
        resolver: zodResolver(createWorkoutSchema),
        defaultValues: defaultValues || {
            workout: {
                user: "user1@example.com",
                date: DateTime.now().toMillis(),
            },
            meta: {
                step: {
                    current: 0,
                    total: 3,
                },
            },
        },
    })

    return (
        <ReactHookFormProvider {...methods}>{children}</ReactHookFormProvider>
    )
}

export default FormProvider
