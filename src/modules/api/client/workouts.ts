"use client"

import axios from "axios"

import workoutsApiModule from "@/modules/api/address/workouts-api"
import {
    type WorkoutData,
    workoutSchema,
} from "@/modules/model/workout/workout-schemas"

class WorkoutAxiosClient {
    private workoutsApiModule = workoutsApiModule

    private async get<Data>(endpoint: string): Promise<Data> {
        return axios.get(endpoint).then((res) => res.data)
    }

    public async getWorkouts() {
        return workoutSchema
            .array()
            .parseAsync(await this.get(this.workoutsApiModule.allWorkouts()))
    }

    public async getWorkout(id: string): Promise<WorkoutData> {
        return workoutSchema.parseAsync(
            await this.get(this.workoutsApiModule.workout(id))
        )
    }

    public async getWorkoutByType(id: string) {
        return workoutSchema
            .array()
            .parseAsync(
                await this.get(this.workoutsApiModule.workoutByType(id))
            )
    }
}

export const workoutAxiosClient = new WorkoutAxiosClient()
