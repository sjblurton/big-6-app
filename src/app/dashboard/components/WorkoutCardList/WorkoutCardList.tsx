"use client"

import { useQuery } from "@tanstack/react-query"
import React, { useMemo } from "react"

import { workoutAxiosClient } from "@/modules/api/client/workouts"
import { createUUIDs } from "@/modules/arrays/uuids"
import { MuiGrid } from "@/modules/components/library/mui"
import { WORKOUTS_QUERY_KEY } from "@/modules/tanstackQuery/keys/query-keys"

import WorkoutCard from "../WorkoutCard/WorkoutCard"
import WorkoutCardSkeleton from "../WorkoutCard/WorkoutCardSkeleton"

function WorkoutCardList() {
    const uuids = useMemo(() => createUUIDs(6), [])
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [WORKOUTS_QUERY_KEY],
        queryFn: () => workoutAxiosClient.getWorkouts(),
    })

    if (isLoading) {
        return (
            <MuiGrid container mt={3} mb={1}>
                {uuids.map((value) => (
                    <MuiGrid
                        item
                        xs={12}
                        key={value}
                        display="flex"
                        height="100%"
                        alignContent="center"
                        justifyContent="center"
                    >
                        <WorkoutCardSkeleton />
                    </MuiGrid>
                ))}
            </MuiGrid>
        )
    }

    if (isError || !data) {
        throw error
    }

    if (data.length === 0) {
        return (
            <MuiGrid container mt={3} mb={1}>
                <MuiGrid
                    item
                    xs={12}
                    display="flex"
                    alignContent="center"
                    justifyContent="center"
                >
                    <h2>You have not yet logged and workouts</h2>
                </MuiGrid>
            </MuiGrid>
        )
    }

    return (
        <MuiGrid container mt={3} mb={1}>
            {data.map((workout) => (
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
            ))}
        </MuiGrid>
    )
}

export default WorkoutCardList
