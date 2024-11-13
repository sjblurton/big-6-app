import { render, screen } from "@testing-library/react"
import React from "react"

import WorkoutSkeletonRadios from "./WorkoutSkeletonRadios"

jest.mock("@/components/libs/mui", () => ({
    MuiGrid: ({ children, ...properties }: { children: React.ReactNode }) => (
        <div data-testid="grid" {...properties}>
            {children}
        </div>
    ),
    MuiSkeleton: (properties: Record<string, unknown>) => (
        <div data-testid="skeleton" {...properties} />
    ),
}))

describe("WorkoutSkeletonRadios", () => {
    it("should render the WorkoutSkeletonRadios component with the correct number of skeletons", () => {
        render(<WorkoutSkeletonRadios />)

        const grids = screen.getAllByTestId("grid")
        expect(grids).toHaveLength(7)

        const skeletons = screen.getAllByTestId("skeleton")
        expect(skeletons).toHaveLength(6)

        for (const skeleton of skeletons) {
            expect(skeleton).toHaveAttribute("variant", "circular")
            expect(skeleton).toHaveAttribute("height", "130")
            expect(skeleton).toHaveAttribute("width", "130")
        }
    })
})
