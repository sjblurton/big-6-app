import { type WorkoutData } from "@/@types/workouts/workout-types"
import { workoutSchema } from "@/schemas/workouts"
import workoutsApiEndpoints from "@/server/endpoints/workouts-api-endpoints"

import workoutCmsClient from "./workout-cms-client"

class ServerFetchClient {
    private readonly workoutsApiModule = workoutsApiEndpoints

    private async get<Data>(
        endpoint: string,
        init: RequestInit & {
            next: { revalidate?: false | number; tags: string[] }
        }
    ): Promise<Data> {
        return fetch(endpoint, { ...init, method: "GET" }).then((res) =>
            res.json()
        )
    }

    public async getWorkouts() {
        return workoutSchema.array().parseAsync(
            await this.get(this.workoutsApiModule.getWorkouts(), {
                next: { tags: ["workouts"] },
            })
        )
    }

    public async getWorkoutByType(id: string) {
        return workoutSchema.array().parseAsync(
            await this.get(this.workoutsApiModule.getWorkoutByType(id), {
                next: { tags: ["workouts", id] },
            })
        )
    }

    public async getWorkout(id: string): Promise<WorkoutData> {
        return workoutSchema.parseAsync(
            await this.get(this.workoutsApiModule.getWorkoutById(id), {
                next: { tags: ["workouts", id] },
            })
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

export const serverFetchClient = new ServerFetchClient()

export type FetchWorkOutSummery = Awaited<
    ReturnType<typeof serverFetchClient.getWorkoutSummery>
>
