import { createClient, groq } from "next-sanity"
import { type WorkoutIds } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"
import { apiVersion, dataset, projectId } from "../env"
import {
    cmsExerciseIdsSchema,
    exerciseDocumentSchema,
    exerciseStepDataSchema,
} from "./schemas"

const staticClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})

export class SanityClient {
    static async getExerciseIds() {
        return cmsExerciseIdsSchema.parseAsync(
            await staticClient.fetch(groq`
            *[_type == 'exercise-document']{
                _id,
                name
            }
        `)
        )
    }

    static async getExerciseDocument(id: WorkoutIds) {
        return exerciseDocumentSchema.parseAsync(
            await staticClient.fetch(groq`
            *[_type == 'exercise-document' && _id == "${id}"][0]
        `)
        )
    }

    static async getExerciseStep(id: WorkoutIds, step: number) {
        return exerciseStepDataSchema.parseAsync(
            await staticClient.fetch(groq`
            *[_type == 'exercise-document' && _id == "${id}"][0]{
                name,
                image,
                "step": steps[step == ${step}][0]
            }
        `)
        )
    }
}
