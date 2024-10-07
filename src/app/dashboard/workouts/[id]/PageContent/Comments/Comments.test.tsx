import { render, screen } from "@testing-library/react"
import React from "react"

import Comments from "./Comments"

describe("Comments", () => {
    const reps = [10, 20, 30]
    const comments = "Great workout!"

    it("renders without crashing", () => {
        render(<Comments isSeconds={false} reps={reps} />)
        reps.forEach((rep, index) => {
            expect(
                screen.getByText(`Set ${index + 1}: ${rep} reps`)
            ).toBeInTheDocument()
        })
    })

    it("renders with rep suffix rep without plural", () => {
        render(<Comments isSeconds={false} reps={[1]} />)
        expect(screen.getByText("Set 1: 1 rep")).toBeInTheDocument()
    })

    it("renders with rep suffix second without plural", () => {
        render(<Comments isSeconds={true} reps={[1]} />)
        expect(screen.getByText("Set 1: 1 second")).toBeInTheDocument()
    })

    it("renders with seconds suffix when isSeconds is true", () => {
        render(<Comments isSeconds={true} reps={reps} />)
        reps.forEach((rep, index) => {
            expect(
                screen.getByText(`Set ${index + 1}: ${rep} seconds`)
            ).toBeInTheDocument()
        })
    })

    it("renders comments when provided", () => {
        render(<Comments isSeconds={false} reps={reps} comments={comments} />)
        expect(screen.getByText("Comments:")).toBeInTheDocument()
        expect(screen.getByText(comments)).toBeInTheDocument()
    })

    it("does not render comments section when comments are not provided", () => {
        render(<Comments isSeconds={false} reps={reps} />)
        expect(screen.queryByText("Comments:")).not.toBeInTheDocument()
    })
})
