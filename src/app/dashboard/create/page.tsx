import { DateTime } from "luxon"

import { MuiContainer } from "@/components/libs/mui"
import CreateForm from "@/features/dashboard/forms/create-form/CreateForm/CreateForm"
import CreateFormProvider from "@/features/dashboard/forms/create-form/CreateFormProvider/CreateFormProvider"
import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"
import { createMetadata } from "@/utils/seo/create-metadata"

export const metadata = createMetadata({
    title: "Log a workout",
    description: "Add a new workout to the database log.",
})

async function Add() {
    const workoutIds = await workoutCmsClient.getExerciseIds()

    return (
        <CreateFormProvider
            defaultValues={{
                workout: {
                    user: "user1@example.com",
                    date: DateTime.now().toMillis(),
                },

                meta: {
                    step: {
                        current: 0,
                        total: 3,
                    },
                    workoutIds,
                },
            }}
        >
            <MuiContainer
                maxWidth="xs"
                sx={{
                    minHeight: "calc(100vh - 64px)",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CreateForm />
            </MuiContainer>
        </CreateFormProvider>
    )
}

export default Add
