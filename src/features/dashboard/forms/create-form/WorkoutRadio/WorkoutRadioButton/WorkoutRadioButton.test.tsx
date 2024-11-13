import { render, screen } from "@testing-library/react"
import React from "react"

import { type CmsExerciseIdSchema } from "@/@types/cms/cms-types"

import WorkoutRadioButton from "./WorkoutRadioButton"

jest.mock("@/components/form-inputs/RadioButton/RadioButton", () => {
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

jest.mock("@/utils/cms/image.ts", () => ({
    urlFor: jest.fn().mockReturnValue({
        width: jest.fn().mockReturnThis(),
        height: jest.fn().mockReturnThis(),
        saturation: jest.fn().mockReturnThis(),
        url: jest.fn().mockReturnValue("mocked-url"),
    }),
}))

describe("WorkoutRadioButton", () => {
    const mockProperties: CmsExerciseIdSchema = {
        _id: "316b2f69-1a2f-4611-8891-bfa754e1b2c5",
        image: {
            _type: "image",
            asset: {
                _type: "reference",
                _ref: "some-asset-ref",
            },
            lqip: "mocked-lqip",
        },
        name: "push up",
    }

    it("should render the WorkoutRadioButton component with the correct props", () => {
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
