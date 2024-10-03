"use client"

import { useQuery } from "@tanstack/react-query"

import { workoutAxiosClient } from "@/modules/api/client/workouts"

import { WORKOUTS_QUERY_KEY } from "../keys/query-keys"

function useGetWorkoutById(id: string | null) {
    return useQuery({
        queryKey: [WORKOUTS_QUERY_KEY, id],
        queryFn: () =>
            id ? workoutAxiosClient.getWorkout(id) : Promise.resolve(null),
        enabled: Boolean(id),
    })
}

export default useGetWorkoutById
