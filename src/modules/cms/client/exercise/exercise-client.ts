import { groq } from "next-sanity"

import { progressionStages } from "@/modules/contants/progression-stages"
import { type WorkoutTypeIds } from "@/modules/model/workout/workout-schemas"

import {
    cmsExerciseIdsSchema,
    exerciseDocumentSchema,
    type ExerciseStep,
    exerciseStepDataSchema,
} from "./exercise-schemas"

import CmsBaseClient from "../shared/base-client"

class ExerciseCmsClient extends CmsBaseClient {
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
            (prog) => prog.stage === progressionStages.advanced.value
        )

        if (!stepProgression) {
            throw new Error("Advanced stage progression not found")
        }

        return stepProgression.sets * stepProgression.reps
    }
}

const exerciseCmsClient = new ExerciseCmsClient()

export default exerciseCmsClient
