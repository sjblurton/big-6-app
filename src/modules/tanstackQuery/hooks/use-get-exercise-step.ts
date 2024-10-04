"use client"

import { useQuery } from "@tanstack/react-query"

import exerciseCmsClient from "@/modules/cms/client/exercise/exercise-client"
import { type WorkoutTypeIds } from "@/modules/model/workout/workout-schemas"

import { WORKOUTS_QUERY_KEY } from "../keys/query-keys"

type Args = {
    type: WorkoutTypeIds
    level: number
} | null

function useGetExerciseStep(args: Args) {
    return useQuery({
        queryKey: [WORKOUTS_QUERY_KEY, args],
        queryFn: () =>
            args
                ? exerciseCmsClient.getExerciseStep(args.type, args.level)
                : Promise.resolve(null),
        enabled: Boolean(args),
    })
}

export default useGetExerciseStep
