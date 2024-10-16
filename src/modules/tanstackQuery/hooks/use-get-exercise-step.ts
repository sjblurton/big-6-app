"use client"

import { useQuery } from "@tanstack/react-query"

import exerciseCmsClient from "@/modules/cms/client/exercise/exercise-client"
import { type WorkoutTypeIds } from "@/modules/model/workout/workout-schemas"

import { WORKOUTS_QUERY_KEY } from "../keys/query-keys"

type Arguments =
    | {
          type: WorkoutTypeIds
          level: number
      }
    | undefined

function useGetExerciseStep(args: Arguments) {
    return useQuery({
        queryKey: [WORKOUTS_QUERY_KEY, args],
        queryFn: () => {
            if (args === undefined) {
                throw new Error(
                    "Running the query without arguments is not allowed"
                )
            }
            return exerciseCmsClient.getExerciseStep(args.type, args.level)
        },
        enabled: args !== undefined,
    })
}

export default useGetExerciseStep
