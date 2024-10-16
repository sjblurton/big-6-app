import { render, screen } from "@testing-library/react"
import { useFormContext } from "react-hook-form"

import { type CreateWorkoutDataInput } from "@/modules/model/workout/workout-schemas"
import { type DeepPartial } from "@/modules/typescript/utility-types"

import FormProvider from "./FormProvider"

const MockChildComponent = () => {
    const { getValues } = useFormContext()
    const currentStep = getValues("meta.step.current")
    const totalSteps = getValues("meta.step.total")
    const user = getValues("workout.user")

    return (
        <div>
            <div data-testid="current-step">{currentStep}</div>
            <div data-testid="total-steps">{totalSteps}</div>
            <div data-testid="user">{user}</div>
        </div>
    )
}

describe("FormProvider", () => {
    it("should provide default form values", () => {
        render(
            <FormProvider>
                <MockChildComponent />
            </FormProvider>
        )

        expect(screen.getByTestId("current-step").textContent).toBe("0")
        expect(screen.getByTestId("total-steps").textContent).toBe("3")
        expect(screen.getByTestId("user").textContent).toBe("user1@example.com")
    })

    it("should override default values with provided values", () => {
        const defaultValues: DeepPartial<CreateWorkoutDataInput> = {
            workout: {
                user: "user2@example.com",
            },
            meta: {
                step: {
                    current: 1,
                    total: 5,
                },
            },
        }

        render(
            <FormProvider defaultValues={defaultValues}>
                <MockChildComponent />
            </FormProvider>
        )

        expect(screen.getByTestId("current-step").textContent).toBe("1")
        expect(screen.getByTestId("total-steps").textContent).toBe("5")
        expect(screen.getByTestId("user").textContent).toBe("user2@example.com")
    })
})
