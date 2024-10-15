"use client"

import useGetExerciseStep from "@/modules/tanstackQuery/hooks/use-get-exercise-step"
import useGetWorkoutById from "@/modules/tanstackQuery/hooks/use-get-workout-by-id"

function useWorkoutSummery(id: string) {
    const {
        data: workoutData,
        error: workoutError,
        isError: isWorkoutError,
        isLoading: isLoadingWorkout,
        ...rest
    } = useGetWorkoutById(id)

    const {
        data: stepData,
        error: stepError,
        isError: isStepError,
        isLoading: isLoadingStep,
    } = useGetExerciseStep(
        workoutData
            ? { level: workoutData.level, type: workoutData.type }
            : undefined
    )

    return {
        isLoading: isLoadingWorkout || isLoadingStep,
        isError: isWorkoutError || isStepError,
        error: workoutError || stepError,
        workout: workoutData,
        step: stepData,
        ...rest,
    }
}

export default useWorkoutSummery
