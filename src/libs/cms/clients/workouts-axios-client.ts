"use client"

import axios from "axios"

import {
    type CreateWorkoutDataOutput,
    type UpdateWorkoutDataOutput,
} from "@/@types/forms/forms-types"
import { type WorkoutData } from "@/@types/workouts/workout-types"
import { workoutSchema } from "@/schemas/workouts"
import workoutsApiEndpoints from "@/server/endpoints/workouts-api-endpoints"

import workoutCmsClient from "./workout-cms-client"

class WorkoutAxiosClient {
    private workoutsApiModule = workoutsApiEndpoints

    private async get<Data>(endpoint: string): Promise<Data> {
        return axios.get(endpoint).then((res) => res.data)
    }

    private async post<Data>(endpoint: string, data: unknown): Promise<Data> {
        return axios.post(endpoint, data).then((res) => res.data)
    }

    private async put<Data>(endpoint: string, data: unknown): Promise<Data> {
        return axios.put(endpoint, data).then((res) => res.data)
    }

    public async postWorkout(data: CreateWorkoutDataOutput) {
        return workoutSchema.parseAsync(
            await this.post(this.workoutsApiModule.getWorkouts(), data)
        )
    }

    public async putWorkout(data: UpdateWorkoutDataOutput, id: string) {
        return workoutSchema
            .partial()
            .parseAsync(
                await this.put(this.workoutsApiModule.getWorkoutById(id), data)
            )
    }

    public async getWorkouts() {
        return workoutSchema
            .array()
            .parseAsync(await this.get(this.workoutsApiModule.getWorkouts()))
    }

    public async getWorkout(id: string): Promise<WorkoutData> {
        return workoutSchema.parseAsync(
            await this.get(this.workoutsApiModule.getWorkoutById(id))
        )
    }

    public async getWorkoutByType(id: string) {
        return workoutSchema
            .array()
            .parseAsync(
                await this.get(this.workoutsApiModule.getWorkoutByType(id))
            )
    }

    public async getWorkoutSummery(id: string) {
        const workout = await this.getWorkout(id)
        const step = await workoutCmsClient.getExerciseStep(
            workout.type,
            workout.level
        )

        return {
            workout,
            step,
        }
    }
}

export const workoutAxiosClient = new WorkoutAxiosClient()

export type AxiosWorkoutSummery = Awaited<
    ReturnType<typeof workoutAxiosClient.getWorkoutSummery>
>
