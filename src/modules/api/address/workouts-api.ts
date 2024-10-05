class WorkoutsApi {
    private baseUrl: string
    private readonly basePath: string = "/api/v1/workouts"

    constructor() {
        this.baseUrl =
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000"
                : ""
    }

    private getEndpoint(
        endpoint: string,
        includeBaseUrl: boolean = true
    ): string {
        return includeBaseUrl ? this.baseUrl + endpoint : endpoint
    }

    public allWorkouts(includeBaseUrl: boolean = true): string {
        const endpoint = `${this.basePath}`
        return this.getEndpoint(endpoint, includeBaseUrl)
    }

    public workout(id: string, includeBaseUrl: boolean = true): string {
        const endpoint = `${this.basePath}/{id}`.replace("{id}", id)
        return this.getEndpoint(endpoint, includeBaseUrl)
    }

    public workoutByType(id: string, includeBaseUrl: boolean = true): string {
        const endpoint = `${this.basePath}/types/{id}`.replace("{id}", id)
        return this.getEndpoint(endpoint, includeBaseUrl)
    }

    public workoutTypes(includeBaseUrl: boolean = true): string {
        const endpoint = `${this.basePath}/types`
        return this.getEndpoint(endpoint, includeBaseUrl)
    }

    public getBaseUrl(): string {
        return this.baseUrl
    }

    public getWorkoutEndpoint(): string {
        return `${this.basePath}/{id}`
    }

    public getWorkoutByTypeEndpoint(): string {
        return `${this.basePath}/types/{id}`
    }
}

const workoutsApi = new WorkoutsApi()

export default workoutsApi
