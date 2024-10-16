import { render, screen } from "@testing-library/react"
import React from "react"

import WorkoutRadioButton from "./WorkoutRadioButton"

jest.mock("@/modules/components/ui/form-inputs/RadioButton/RadioButton", () => {
    const MockRadioButton = ({
        label,
        selectedLabel,
        ...rest
    }: {
        label: React.ReactNode
        selectedLabel: React.ReactNode
    }) => (
        <div data-testid="radio-button" {...rest}>
            {label}
            {selectedLabel}
        </div>
    )
    MockRadioButton.displayName = "MockRadioButton"
    return MockRadioButton
})

jest.mock("next/image", () => {
    const MockNextImage = (properties: Record<string, unknown>) => (
        <div data-testid="image" {...properties} />
    )
    return MockNextImage
})

jest.mock("@/modules/cms/client/image", () => ({
    urlFor: jest.fn().mockReturnValue({
        width: jest.fn().mockReturnThis(),
        height: jest.fn().mockReturnThis(),
        saturation: jest.fn().mockReturnThis(),
        url: jest.fn().mockReturnValue("mocked-url"),
    }),
}))

describe("WorkoutRadioButton", () => {
    const mockProperties = {
        _id: "exercise-id",
        image: {
            lqip: "mocked-lqip",
        },
        name: "Exercise Name",
    }

    it("should render the WorkoutRadioButton component with the correct props", () => {
        // @ts-expect-error - we are only testing
        render(<WorkoutRadioButton {...mockProperties} />)

        const radioButton = screen.getByTestId("radio-button")
        expect(radioButton).toBeInTheDocument()
        expect(radioButton).toHaveAttribute("value", mockProperties._id)
        expect(radioButton).toHaveAttribute("name", "workout.type")

        const labelImages = screen.getAllByTestId("image")
        expect(labelImages).toHaveLength(2)
        for (const image of labelImages) {
            expect(image).toHaveAttribute("src", "mocked-url")
            expect(image).toHaveAttribute(
                "alt",
                `person practicing the ${mockProperties.name.toLowerCase()} exercise.`
            )
            expect(image).toHaveAttribute("placeholder", "blur")
            expect(image).toHaveAttribute(
                "blurDataURL",
                mockProperties.image.lqip
            )
            expect(image).toHaveAttribute("width", "80")
            expect(image).toHaveAttribute("height", "80")
        }
    })
})
