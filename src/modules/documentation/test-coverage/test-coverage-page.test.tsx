import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"

import { type TestCoverageSummary } from "@/modules/documentation/test-coverage/test-coverage-json-schema"

import TestCoveragePage from "./Coverage"
import useCoverageData from "./use-coverage-data"

jest.mock("./use-coverage-data", () => ({
    __esModule: true,
    default: jest.fn(),
}))

const mockEmptyData: TestCoverageSummary[] = []

const mockData: TestCoverageSummary[] = [
    {
        key: "1",
        name: "ComponentA",
        lines: 81,
        statements: 91,
        functions: 85,
        branches: 73,
    },
    {
        key: "2",
        name: "ComponentB",
        lines: 70,
        statements: 75,
        functions: 80,
        branches: 60,
    },
]

jest.mock("../../../styles/utilityClasses/_background.module.scss", () => ({
    success: "mock-success-class",
    error: "mock-error-class",
    warning: "mock-warning-class",
}))

describe("TestCoveragePage - no data", () => {
    beforeEach(() => {
        jest.clearAllMocks()
        ;(useCoverageData as jest.Mock).mockReturnValueOnce(mockEmptyData)
    })

    it("should render without a11y violations", async () => {
        expect.extend(toHaveNoViolations)
        const { container } = render(<TestCoveragePage />)
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })

    it("should render with a title", () => {
        render(<TestCoveragePage />)
        expect(
            screen.getByRole("heading", { name: "Test Coverage" })
        ).toBeInTheDocument()
    })

    it("should not render a table when no data is returned", () => {
        render(<TestCoveragePage />)
        expect(screen.queryByRole("table")).not.toBeInTheDocument()
    })

    it("should render no data message when no data is returned", () => {
        render(<TestCoveragePage />)
        expect(screen.getByText("No data available")).toBeInTheDocument()
    })
})

describe("TestCoveragePage - with specific data", () => {
    beforeEach(() => {
        jest.clearAllMocks()
        ;(useCoverageData as jest.Mock).mockReturnValueOnce(mockData)
    })

    it("should render with specific data", () => {
        render(<TestCoveragePage />)

        expect(
            screen.getByRole("heading", { name: "Test Coverage" })
        ).toBeInTheDocument()
        expect(screen.getByRole("table")).toBeInTheDocument()
        expect(
            screen.getByRole("columnheader", { name: "name" })
        ).toBeInTheDocument()
        expect(
            screen.getByRole("columnheader", { name: "lines" })
        ).toBeInTheDocument()
        expect(
            screen.getByRole("columnheader", { name: "statements" })
        ).toBeInTheDocument()
        expect(
            screen.getByRole("columnheader", { name: "functions" })
        ).toBeInTheDocument()
        expect(
            screen.getByRole("columnheader", { name: "branches" })
        ).toBeInTheDocument()

        expect(
            screen.getByRole("cell", { name: /ComponentA/i })
        ).toBeInTheDocument()
    })

    it("should render 80% content with warning class", async () => {
        render(<TestCoveragePage />)
        const cellElement = screen.getByRole("cell", { name: /80%/i })
        expect(cellElement).toHaveClass("mock-warning-class")
    })

    it("should render 91% content with success class", async () => {
        render(<TestCoveragePage />)
        const cellElement = screen.getByRole("cell", { name: /91%/i })
        expect(cellElement).toHaveClass("mock-success-class")
    })

    it("should render 70% content with error class", async () => {
        render(<TestCoveragePage />)
        const cellElement = screen.getByRole("cell", { name: /70%/i })
        expect(cellElement).toHaveClass("mock-error-class")
    })
})
