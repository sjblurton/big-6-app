import { NextRequest } from "next/server"
import { ZodError } from "zod"
import { WorkoutService } from "./workout.service"
import GetWorkoutData from "../../../database/workouts/read/getWorkoutData"
import { emailSchema } from "../../../model/api/routes/workouts/inputs/inputs"

const passingEmail = "test@pass,com"

describe("WorkoutsService", () => {
    let workoutsService: WorkoutService

    const mockRequest = {
        headers: new Headers({
            "x-user-email": passingEmail,
        }),
        url: "http://example.com?limitBy=5",
    } as NextRequest

    const mockGetWorkoutData = jest.fn()

    jest.mock("../../../database/workouts/read/getWorkoutData.ts", () => ({
        GetWorkoutData: {
            getWorkoutData: mockGetWorkoutData,
        },
    }))

    beforeEach(() => {
        jest.clearAllMocks()

        jest.spyOn(emailSchema, "safeParse").mockImplementation(() => ({
            success: true,
            data: passingEmail,
        }))

        workoutsService = new WorkoutService(mockRequest, "pull-ups")
    })

    it("should be defined", () => {
        expect(workoutsService).toBeDefined()
    })

    it("should call GetWorkoutsData.getWorkoutsData", async () => {
        const mockReturnValue: unknown = []

        Reflect.set(
            GetWorkoutData,
            "getWorkoutData",
            jest.fn().mockResolvedValue(mockReturnValue)
        )

        const result = await workoutsService.getServiceData()

        expect(result).toEqual(mockReturnValue)
    })

    it("should throw an error if no email is provided", () => {
        const mockRequestWithoutEmail = {
            headers: new Headers(),
            url: "http://example.com?limitBy=5",
        } as NextRequest

        jest.spyOn(emailSchema, "safeParse").mockImplementation(() => ({
            success: false,
            error: new ZodError([
                {
                    message: "Invalid email format",
                    path: ["x-user-email"],
                    code: "invalid_type",
                    expected: "string",
                    received: "undefined",
                },
            ]),
        }))

        expect(
            () => new WorkoutService(mockRequestWithoutEmail, "pull-ups")
        ).toThrow("Forbidden")
    })

    it("should throw an error if the email is invalid", () => {
        const mockRequestWithInvalidEmail = {
            headers: new Headers({
                "x-user-email": "invalid-email",
            }),
            url: "http://example.com?limitBy=5",
        } as NextRequest

        jest.spyOn(emailSchema, "safeParse").mockImplementation(() => ({
            success: false,
            error: new ZodError([
                {
                    message: "Invalid email format",
                    code: "invalid_string",
                    path: ["x-user-email"],
                    validation: "email",
                },
            ]),
        }))

        expect(
            () => new WorkoutService(mockRequestWithInvalidEmail, "pull-ups")
        ).toThrow("Forbidden")
    })
})
