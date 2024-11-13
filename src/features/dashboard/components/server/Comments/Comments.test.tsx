import { render, screen } from "@testing-library/react"
import React from "react"

import Comments from "./Comments"

describe("Comments", () => {
    const reps = [{ value: 10 }, { value: 20 }, { value: 30 }]
    const comments = "Great workout!"

    it("should render without crashing", () => {
        render(<Comments isSeconds={false} reps={reps} />)
        for (const [index, rep] of reps.entries()) {
            expect(
                screen.getByText(`Set ${index + 1}: ${rep.value} reps`)
            ).toBeInTheDocument()
        }
    })

    it("should render with rep suffix rep without plural", () => {
        render(<Comments isSeconds={false} reps={[{ value: 1 }]} />)
        expect(screen.getByText("Set 1: 1 rep")).toBeInTheDocument()
    })

    it("should render with rep suffix second without plural", () => {
        render(<Comments isSeconds={true} reps={[{ value: 1 }]} />)
        expect(screen.getByText("Set 1: 1 second")).toBeInTheDocument()
    })

    it("should render with seconds suffix when isSeconds is true", () => {
        render(<Comments isSeconds={true} reps={reps} />)
        for (const [index, rep] of reps.entries()) {
            expect(
                screen.getByText(`Set ${index + 1}: ${rep.value} seconds`)
            ).toBeInTheDocument()
        }
    })

    it("should render comments when provided", () => {
        render(<Comments isSeconds={false} reps={reps} comments={comments} />)
        expect(screen.getByText("Comments:")).toBeInTheDocument()
        expect(screen.getByText(comments)).toBeInTheDocument()
    })

    it("does not render comments section when comments are not provided", () => {
        render(<Comments isSeconds={false} reps={reps} />)
        expect(screen.queryByText("Comments:")).not.toBeInTheDocument()
    })
})
