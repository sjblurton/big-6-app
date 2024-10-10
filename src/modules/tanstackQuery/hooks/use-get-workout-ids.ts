"use client"

import { useQuery } from "@tanstack/react-query"

import exerciseCmsClient from "@/modules/cms/client/exercise/exercise-client"

import { WORKOUTS_QUERY_KEY } from "../keys/query-keys"

function useGetWorkoutIds() {
    return useQuery({
        queryKey: [WORKOUTS_QUERY_KEY, "ids"],
        queryFn: () => exerciseCmsClient.getExerciseIds(),
    })
}

export default useGetWorkoutIds
