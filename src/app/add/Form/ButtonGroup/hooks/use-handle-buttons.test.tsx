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
        mockContextInputs.getValues.mockImplementation((field) => {
            if (field === "meta.step.current") return 0
            if (field === "meta.step.total") return 3
        })
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

    it("should return early if trigger returns false", async () => {
        mockContextInputs.getValues.mockImplementation((field) => {
            if (field === "meta.step.current") return 0
            if (field === "meta.step.total") return 3
        })
        mockContextInputs.trigger.mockResolvedValue(false)

        const { result } = renderHook(() => useHandleButtons())

        await act(async () => {
            await result.current.handleNext()
        })

        expect(mockContextInputs.setValue).not.toHaveBeenCalled()
        expect(result.current.isLoading).toBe(false)
    })

    it("should handle previous step correctly", () => {
        mockContextInputs.getValues.mockImplementation((field) => {
            if (field === "meta.step.current") return 1
            if (field === "meta.step.total") return 3
        })

        const { result } = renderHook(() => useHandleButtons())

        result.current.handlePrevious()

        expect(mockContextInputs.setValue).toHaveBeenCalledWith(
            "meta.step.current",
            0
        )
    })

    it("should return early if previous and step is 0", () => {
        mockContextInputs.getValues.mockImplementation((field) => {
            if (field === "meta.step.current") return 0
            if (field === "meta.step.total") return 3
        })

        const { result } = renderHook(() => useHandleButtons())

        result.current.handlePrevious()

        expect(mockContextInputs.setValue).not.toHaveBeenCalled()
    })

    it("should handle cancel correctly", () => {
        const { result } = renderHook(() => useHandleButtons())

        result.current.handleCancel()

        expect(mockContextInputs.reset).toHaveBeenCalled()
        expect(mockRouter.push).toHaveBeenCalledWith("/dashboard")
    })

    it("should handle next step correctly if on step two", async () => {
        mockContextInputs.getValues.mockImplementation((field) => {
            if (field === "meta.step.current") return 1
            if (field === "meta.step.total") return 3
        })
        mockContextInputs.trigger.mockResolvedValue(true)

        const { result } = renderHook(() => useHandleButtons())

        await act(async () => {
            await result.current.handleNext()
        })

        expect(mockContextInputs.setValue).toHaveBeenCalledWith(
            "meta.step.current",
            2
        )
        expect(result.current.isLoading).toBe(false)
    })

    it("should return early if next step is the last step", async () => {
        mockContextInputs.getValues.mockImplementation((field) => {
            if (field === "meta.step.current") return 2
            if (field === "meta.step.total") return 3
        })

        const { result } = renderHook(() => useHandleButtons())

        await act(async () => {
            await result.current.handleNext()
        })

        expect(mockContextInputs.setValue).not.toHaveBeenCalled()
        expect(result.current.isLoading).toBe(false)
    })
})
