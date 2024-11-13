import { groq } from "next-sanity"

import { type ExerciseStep } from "@/@types/cms/cms-types"
import { type WorkoutTypeIds } from "@/@types/workouts/workout-types"
import { PROGRESSION_STAGES } from "@/constants/strings/progression-stages"
import CmsBaseClient from "@/libs/cms/clients/base-client"

import {
    cmsExerciseIdsSchema,
    exerciseDocumentSchema,
    exerciseStepDataSchema,
} from "../../../schemas/cms"

class WorkoutCmsClient extends CmsBaseClient {
    private EXERCISE_DOCUMENT = "'exercise-document'"

    async getExerciseIds() {
        return cmsExerciseIdsSchema.parseAsync(
            await this.fetch(groq`
                *[_type == ${this.EXERCISE_DOCUMENT} && ${this._queryOmitDrafts}]{
                    _id,
                    name,
                    "image":{
                        ...image,
                        "lqip": image.asset->metadata.lqip
                    }
                }
            `)
        )
    }

    async getExerciseDocument(id: WorkoutTypeIds) {
        return exerciseDocumentSchema.parseAsync(
            await this.fetch(groq`
            *[_type == ${this.EXERCISE_DOCUMENT} && ${this._queryOmitDrafts} && _id == "${id}"][0]
        `)
        )
    }

    async getExerciseStep(id: WorkoutTypeIds, step: number) {
        const parsedData = await exerciseStepDataSchema.parseAsync(
            await this.fetch(groq`
            *[_type == ${this.EXERCISE_DOCUMENT} && ${this._queryOmitDrafts} && _id == "${id}"][0]{
                name,
                image,
                "step": steps[step == ${step}][0]
            }
        `)
        )

        const advanceGoal = this.getAdvanceGoal(parsedData.step.progressions)

        return {
            ...parsedData,
            advanceGoal,
        }
    }

    private getAdvanceGoal(progressions: ExerciseStep["progressions"]) {
        const stepProgression = progressions.find(
            (progression) =>
                progression.stage === PROGRESSION_STAGES.advanced.value
        )

        if (!stepProgression) {
            throw new Error("Advanced stage progression not found")
        }

        return stepProgression.sets * stepProgression.reps
    }
}

const workoutCmsClient = new WorkoutCmsClient()

export default workoutCmsClient
