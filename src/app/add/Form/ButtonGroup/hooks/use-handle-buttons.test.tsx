import { act, renderHook } from "@testing-library/react"
import { useRouter } from "next/navigation"

import useHandleButtons from "./use-handle-buttons"

import { useCreateFormContextInputs } from "../../hooks/use-create-form-context"

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}))

jest.mock("../../hooks/use-create-form-context", () => ({
    useCreateFormContextInputs: jest.fn(),
}))

describe("useHandleButtons", () => {
    const mockRouter = {
        push: jest.fn(),
    }

    const mockContextInputs = {
        trigger: jest.fn(),
        getValues: jest.fn(),
        setValue: jest.fn(),
        reset: jest.fn(),
    }

    beforeEach(() => {
        ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
        ;(useCreateFormContextInputs as jest.Mock).mockReturnValue(
            mockContextInputs
        )
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("should handle validation and step increment correctly", async () => {
        mockContextInputs.getValues.mockReturnValue(0)
        mockContextInputs.trigger.mockResolvedValue(true)

        const { result } = renderHook(() => useHandleButtons())

        await act(async () => {
            await result.current.handleNext()
        })

        expect(mockContextInputs.setValue).toHaveBeenCalledWith(
            "meta.step.current",
            1
        )
        expect(result.current.isLoading).toBe(false)
    })

    it("should throw an error if current step is greater than 1", async () => {
        mockContextInputs.getValues.mockReturnValue(2)

        const { result } = renderHook(() => useHandleButtons())

        await expect(result.current.handleNext()).rejects.toThrow(
            "Not to but used to validate step any other than 0 and 1"
        )
        expect(result.current.isLoading).toBe(false)
    })
})
