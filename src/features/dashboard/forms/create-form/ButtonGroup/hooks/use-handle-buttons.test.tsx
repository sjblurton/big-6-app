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

const mockRouter = {
    push: jest.fn(),
}

const mockContextInputs = {
    setValue: jest.fn(),
    trigger: jest.fn(),
    getValues: jest.fn(),
    reset: jest.fn(),
}

describe("useHandleButtons", () => {
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
        mockContextInputs.getValues.mockImplementation((key) => {
            if (key === "meta.step.current") return 0
            if (key === "meta.step.total") return 3
        })
        mockContextInputs.trigger.mockReturnValueOnce(true)

        const { result } = renderHook(() => useHandleButtons())
        await act(async () => {
            await result.current.handleNext()
        })
        expect(mockContextInputs.trigger).toHaveBeenCalled()
        expect(mockContextInputs.setValue).toHaveBeenCalledWith(
            "meta.step.current",
            1
        )
    })

    it("should return early if trigger returns false", async () => {
        mockContextInputs.trigger.mockReturnValueOnce(false)
        const { result } = renderHook(() => useHandleButtons())
        await act(async () => {
            await result.current.handleNext()
        })
        expect(mockContextInputs.setValue).not.toHaveBeenCalled()
    })

    it("should handle previous step correctly", () => {
        mockContextInputs.getValues.mockImplementation((key) => {
            if (key === "meta.step.current") return 1
            if (key === "meta.step.total") return 3
        })

        const { result } = renderHook(() => useHandleButtons())
        act(() => {
            result.current.handlePrevious()
        })
        expect(mockContextInputs.setValue).toHaveBeenCalledWith(
            "meta.step.current",
            0
        )
    })
})
