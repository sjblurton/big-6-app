import { zodResolver } from "@hookform/resolvers/zod"
import {
    type FieldValues,
    FormProvider as ReactHookFormProvider,
    useForm,
} from "react-hook-form"
import { type z } from "zod"

type FormProviderProperties<FormData extends FieldValues> = {
    children: React.ReactNode
    schema: z.ZodType<FormData>
    onSubmit: (data: FormData) => Promise<Response>
}

function FormProvider<FormData extends FieldValues>({
    children,
    schema,
    onSubmit,
}: FormProviderProperties<FormData>) {
    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    return (
        <ReactHookFormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </ReactHookFormProvider>
    )
}

export default FormProvider
