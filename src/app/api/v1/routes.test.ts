import { NextRequest, NextResponse } from "next/server"
import ErrorHandler from "@/modules/api/error-handler/ErrorHandler"
import WorkoutsController from "@/modules/api/workouts/controller/workouts.controller"
import WorkoutController from "@/modules/api/workout/controller/workout.controller"
import { ApiNotFoundError } from "@/modules/api/error-handler/errors/api.error.not-found"
import { ApiZodValidationError } from "@/modules/api/error-handler/errors/api.error.zod-validation"
import { GET as workoutsGET } from "./workouts/route"
import { GET as workoutGET } from "./workouts/[id]/route"

const mockRequest = {
    headers: new Headers({
        "x-user-email": "test@example.com",
    }),
    url: "http://example.com",
} as NextRequest

const mockHandle = jest.fn()
jest.mock("../../../modules/api/error-handler/ErrorHandler", () => ({
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
        handle: mockHandle,
    })),
}))

jest.mock("next/server", () => ({
    NextResponse: {
        json: jest.fn((data, init) => ({
            json: () => data,
            status: init?.status || 200,
            headers: {},
        })),
    },
}))

describe.each([
    {
        description: "workouts.GET",
        GET: workoutsGET,
        mockArgs: [mockRequest],
        ControllerSpy: jest.spyOn(WorkoutsController.prototype, "GET"),
    },
    {
        description: "workout.GET",
        GET: workoutGET,
        mockArgs: [mockRequest, { params: { name: "pull-ups" } }],
        ControllerSpy: jest.spyOn(WorkoutController.prototype, "GET"),
    },
] as const)(
    "$description GET function",
    ({ GET, ControllerSpy, mockArgs, description }) => {
        beforeEach(() => {
            jest.clearAllMocks()
        })

        it(`should call ${description} and return response`, async () => {
            const mockResponse = NextResponse.json({ example: "data" })

            // @ts-expect-error - The response types are not matching as I'm testing multiple functions
            ControllerSpy.mockResolvedValue(mockResponse)

            // @ts-expect-error - The Args can be different tuples as I'm testing multiple functions
            const result = await GET(...mockArgs)

            expect(ControllerSpy).toHaveBeenCalledTimes(1)
            expect(result).toEqual(mockResponse)
        })

        it(`should call ErrorHandler.handle if ${description} throws an error`, async () => {
            const mockError = new Error("test error")
            const mockErrorResponse = NextResponse.json(
                {
                    error: { message: "test error" },
                },
                { status: 500 }
            )

            ControllerSpy.mockRejectedValue(mockError)

            mockHandle.mockReturnValue(mockErrorResponse)

            // @ts-expect-error - I'm not sure why this is throwing an error
            const result = await GET(...mockArgs)

            expect(ControllerSpy).toHaveBeenCalledTimes(1)
            expect(ErrorHandler).toHaveBeenCalledTimes(1)
            expect(ErrorHandler).toHaveBeenCalledWith(mockError)
            expect(mockHandle).toHaveBeenCalledTimes(1)
            expect(mockHandle).toHaveBeenCalledWith()
            expect(result).toEqual(mockErrorResponse)
        })

        it(`should call ErrorHandler.handle if ${description} throws an ApiError 404`, async () => {
            const mockError = new ApiNotFoundError({
                description: "test error",
            })
            const mockErrorResponse = NextResponse.json(
                {
                    error: { message: "test error" },
                },
                { status: 500 }
            )

            ControllerSpy.mockRejectedValue(mockError)

            mockHandle.mockReturnValue(mockErrorResponse)

            // @ts-expect-error - I'm not sure why this is throwing an error
            const result = await GET(...mockArgs)

            expect(ControllerSpy).toHaveBeenCalledTimes(1)
            expect(ErrorHandler).toHaveBeenCalledTimes(1)
            expect(ErrorHandler).toHaveBeenCalledWith(mockError)
            expect(mockHandle).toHaveBeenCalledTimes(1)
            expect(mockHandle).toHaveBeenCalledWith()
            expect(result).toEqual(mockErrorResponse)
        })

        it(`should call ErrorHandler.handle if ${description} throws an ApiZodValidationError`, async () => {
            const mockError = new ApiZodValidationError({
                cause: [
                    {
                        code: "invalid_type",
                        received: "array",
                        expected: "string",
                        path: ["params", "level"],
                        message: "Invalid input",
                    },
                ],
                description: "test error",
            })
            const mockErrorResponse = NextResponse.json(
                {
                    error: { message: "test error" },
                },
                { status: 500 }
            )

            ControllerSpy.mockRejectedValue(mockError)

            mockHandle.mockReturnValue(mockErrorResponse)

            // @ts-expect-error - I'm not sure why this is throwing an error
            const result = await GET(...mockArgs)

            expect(ControllerSpy).toHaveBeenCalledTimes(1)
            expect(ErrorHandler).toHaveBeenCalledTimes(1)
            expect(ErrorHandler).toHaveBeenCalledWith(mockError)
            expect(mockHandle).toHaveBeenCalledTimes(1)
            expect(mockHandle).toHaveBeenCalledWith()
            expect(result).toEqual(mockErrorResponse)
        })
    }
)
