"use client"

import axios from "axios"

import workoutsApiModule from "@/modules/api/address/workouts-api"
import {
    type CreateWorkoutDataOutput,
    type WorkoutData,
    workoutSchema,
} from "@/modules/model/workout/workout-schemas"

class WorkoutAxiosClient {
    private workoutsApiModule = workoutsApiModule

    private async get<Data>(endpoint: string): Promise<Data> {
        return axios.get(endpoint).then((res) => res.data)
    }

    private async post<Data>(endpoint: string, data: unknown): Promise<Data> {
        return axios.post(endpoint, data).then((res) => res.data)
    }

    public async postWorkout(data: CreateWorkoutDataOutput) {
        return workoutSchema.parseAsync(
            await this.post(this.workoutsApiModule.workouts(), data)
        )
    }

    public async getWorkouts() {
        return workoutSchema
            .array()
            .parseAsync(await this.get(this.workoutsApiModule.workouts()))
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
