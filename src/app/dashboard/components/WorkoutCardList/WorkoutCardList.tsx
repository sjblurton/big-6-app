"use client"

import { useQuery } from "@tanstack/react-query"
import React from "react"

import { workoutAxiosClient } from "@/modules/api/client/workouts"
import { MuiGrid, MuiTypography } from "@/modules/components/library/mui"
import { WORKOUTS_QUERY_KEY } from "@/modules/tanstackQuery/keys/query-keys"

import WorkoutCardListSkeleton from "./WorkoutCardListSkeleton"

import WorkoutCard from "../WorkoutCard/WorkoutCard"

function WorkoutCardList() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [WORKOUTS_QUERY_KEY],
        queryFn: () => workoutAxiosClient.getWorkouts(),
    })

    if (isLoading) {
        return <WorkoutCardListSkeleton />
    }

    if (isError || !data) {
        throw error
    }

    return (
        <MuiGrid container mt={3} mb={1}>
            {data.length > 0 ? (
                data.map((workout) => (
                    <MuiGrid
                        item
                        xs={12}
                        key={workout.key}
                        display="flex"
                        alignContent="center"
                        justifyContent="center"
                    >
                        <WorkoutCard workout={workout} />
                    </MuiGrid>
                ))
            ) : (
                <MuiGrid
                    item
                    xs={12}
                    display="flex"
                    alignContent="center"
                    justifyContent="center"
                >
                    <MuiTypography variant="h4" component="h2">
                        You have not yet logged any workouts
                    </MuiTypography>
                </MuiGrid>
            )}
        </MuiGrid>
    )
}

export default WorkoutCardList
