import Form from "@/app/add/Form/Form"
import FormProvider from "@/app/add/Form/FormProvider/FormProvider"
import { MuiContainer } from "@/modules/components/library/mui"
import { createMetadata } from "@/modules/seo/create-metadata"

export const metadata = createMetadata({
    title: "Log a workout",
    description: "Add a new workout to the database log.",
})

function Add() {
    return (
        <FormProvider>
            <MuiContainer
                maxWidth="xs"
                sx={{
                    minHeight: "calc(100vh - 64px)",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Form />
            </MuiContainer>
        </FormProvider>
    )
}

export default Add
