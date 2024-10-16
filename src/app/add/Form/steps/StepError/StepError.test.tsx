import { render, screen } from "@testing-library/react"
import React from "react"

import StepError from "./StepError"

jest.mock("@/modules/components/library/mui", () => ({
    MuiTypography: (properties: Record<string, unknown>) => (
        <div data-testid="mui-typography" {...properties} />
    ),
}))

jest.mock("@/modules/colors/get-text-contrast", () => ({
    getTextContrast: jest.fn(),
}))

describe("StepError", () => {
    it("should render the StepError component with the correct message", () => {
        const message = "This is an error message"

        render(<StepError message={message} />)

        expect(screen.getByTestId("mui-typography")).toHaveTextContent(message)
    })
})
