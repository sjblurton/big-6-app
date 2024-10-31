import { catchError, catchErrorType } from "./catch-error"

describe("catchError", () => {
    it("should return data when the promise resolves", async () => {
        const promise = Promise.resolve("data")
        const result = await catchError(promise)
        expect(result).toEqual([undefined, "data"])
    })

    it("should return an error when the promise rejects", async () => {
        const error = new Error("Test error")
        const promise = Promise.reject(error)
        const result = await catchError(promise)
        expect(result).toEqual([error])
    })

    it("should throw a new error if the caught error is not an instance of Error", async () => {
        const promise = Promise.reject("string error")
        await expect(catchError(promise)).rejects.toThrow(
            "Error is not an instance of Error"
        )
    })
})

describe("catchErrorType", () => {
    class CustomError extends Error {}
    class AnotherError extends Error {}

    it("should return data when the promise resolves", async () => {
        const promise = Promise.resolve("data")
        const result = await catchErrorType(promise, [CustomError])
        expect(result).toEqual([undefined, "data"])
    })

    it("should return a specific error instance when the promise rejects with that error", async () => {
        const error = new CustomError("Custom error")
        const promise = Promise.reject(error)
        const result = await catchErrorType(promise, [CustomError])
        expect(result).toEqual([error])
    })

    it("should throw the error if it is not in the errorsToCatch list", async () => {
        const error = new AnotherError("Another error")
        const promise = Promise.reject(error)
        await expect(catchErrorType(promise, [CustomError])).rejects.toThrow(
            error
        )
    })
})
