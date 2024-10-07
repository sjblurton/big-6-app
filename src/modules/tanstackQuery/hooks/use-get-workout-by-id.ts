"use client"

import { useQuery } from "@tanstack/react-query"

import { workoutAxiosClient } from "@/modules/api/client/workouts"

import { WORKOUTS_QUERY_KEY } from "../keys/query-keys"

function useGetWorkoutById(id: string | null) {
    return useQuery({
        queryKey: [WORKOUTS_QUERY_KEY, id],
        queryFn: () => {
            if (id === null) {
                throw new Error(
                    "Running the query without arguments is not allowed"
                )
            }
            return workoutAxiosClient.getWorkout(id)
        },
        enabled: id !== null,
    })
}

export default useGetWorkoutById
