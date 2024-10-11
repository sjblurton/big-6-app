import Form from "@/app/add/Form/Form"
import FormProvider from "@/app/add/Form/Provider/Provider"
import { MuiContainer } from "@/modules/components/library/mui"
import { createMetadata } from "@/modules/seo/create-metadata"

export const metadata = createMetadata({
    title: "Log a workout",
    description: "Add a new workout to the database log.",
})

function Add() {
    return (
        <MuiContainer maxWidth="xs" sx={{ height: "calc(100vh - 150px)" }}>
            <FormProvider>
                <Form />
            </FormProvider>
        </MuiContainer>
    )
}

export default Add
