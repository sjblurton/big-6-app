import { MuiContainer } from "@/components/libs/mui"
import UpdateForm from "@/features/dashboard/forms/update-form/UpdateForm/UpdateForm"
import UpdateFormInputs from "@/features/dashboard/forms/update-form/UpdateFormInputs/UpdateFormInputs"
import UpdateFormProvider from "@/features/dashboard/forms/update-form/UpdateFormProvider/UpdateFormProvider"
import { serverFetchClient } from "@/libs/cms/clients/workouts-fetch-client"

type Parameters = {
    id: string
}

async function EditPage({ params: { id } }: { params: Parameters }) {
    const workoutSummery = await serverFetchClient.getWorkoutSummery(id)

    return (
        <MuiContainer maxWidth="sm">
            <UpdateFormProvider workoutSummery={workoutSummery}>
                <UpdateForm>
                    <UpdateFormInputs />
                </UpdateForm>
            </UpdateFormProvider>
        </MuiContainer>
    )
}

export default EditPage
