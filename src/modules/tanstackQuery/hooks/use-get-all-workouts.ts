"use client"

import { useQuery } from "@tanstack/react-query"

import { workoutAxiosClient } from "@/modules/api/client/workouts"

import { WORKOUTS_QUERY_KEY } from "../keys/query-keys"

function useGetAllWorkouts() {
    return useQuery({
        queryKey: [WORKOUTS_QUERY_KEY],
        queryFn: () => workoutAxiosClient.getWorkouts(),
    })
}

export default useGetAllWorkouts
