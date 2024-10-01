import { createClient, groq } from "next-sanity"
import { type WorkoutTypeIds } from "@/modules/model/workout/workout-schemas"
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

export class CmsClient {
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

    static async getExerciseDocument(id: WorkoutTypeIds) {
        return exerciseDocumentSchema.parseAsync(
            await staticClient.fetch(groq`
            *[_type == 'exercise-document' && _id == "${id}"][0]
        `)
        )
    }

    static async getExerciseStep(id: WorkoutTypeIds, step: number) {
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
