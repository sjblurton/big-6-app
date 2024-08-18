import React from "react"
import { render, screen } from "@testing-library/react"
import InstructionsCard from "./InstructionsCard"

const levels = Array.from({ length: 10 }, (_, i) => i + 1)

describe("InstructionsCard Positive", () => {
    levels.forEach((level) => {
        it(`should render bridges card ${level} correctly with positive SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="bridges"
                    isPositive
                    level={level}
                />
            )
            const positiveSvg = screen.getByTestId("svg-positive")
            expect(positiveSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render squats card ${level} correctly with positive SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="squats"
                    isPositive
                    level={level}
                />
            )
            const positiveSvg = screen.getByTestId("svg-positive")
            expect(positiveSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render pull-ups card ${level} correctly with positive SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="pull-ups"
                    isPositive
                    level={level}
                />
            )
            const positiveSvg = screen.getByTestId("svg-positive")
            expect(positiveSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render push-ups card ${level} correctly with positive SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="push-ups"
                    isPositive
                    level={level}
                />
            )
            const positiveSvg = screen.getByTestId("svg-positive")
            expect(positiveSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render handstands card ${level} correctly with positive SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="handstands"
                    isPositive
                    level={level}
                />
            )
            const positiveSvg = screen.getByTestId("svg-positive")
            expect(positiveSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render leg-raises card ${level} correctly with positive SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="leg-raises"
                    isPositive
                    level={level}
                />
            )
            const positiveSvg = screen.getByTestId("svg-positive")
            expect(positiveSvg).toBeInTheDocument()
        })
    })
})

describe("InstructionsCard Negative", () => {
    levels.forEach((level) => {
        it(`should render bridges card ${level} correctly with negative SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="bridges"
                    isPositive={false}
                    level={level}
                />
            )
            const negativeSvg = screen.getByTestId("svg-negative")
            expect(negativeSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render squats card ${level} correctly with negative SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="squats"
                    isPositive={false}
                    level={level}
                />
            )
            const negativeSvg = screen.getByTestId("svg-negative")
            expect(negativeSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render pull-ups card ${level} correctly with negative SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="pull-ups"
                    isPositive={false}
                    level={level}
                />
            )
            const negativeSvg = screen.getByTestId("svg-negative")
            expect(negativeSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render push-ups card ${level} correctly with negative SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="push-ups"
                    isPositive={false}
                    level={level}
                />
            )
            const negativeSvg = screen.getByTestId("svg-negative")
            expect(negativeSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render handstands card ${level} correctly with negative SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="handstands"
                    isPositive={false}
                    level={level}
                />
            )
            const negativeSvg = screen.getByTestId("svg-negative")
            expect(negativeSvg).toBeInTheDocument()
        })
    })

    levels.forEach((level) => {
        it(`should render leg-raises card ${level} correctly with negative SVG`, () => {
            render(
                <InstructionsCard
                    directions="testing directions"
                    name="test workout"
                    workoutKey="leg-raises"
                    isPositive={false}
                    level={level}
                />
            )
            const negativeSvg = screen.getByTestId("svg-negative")
            expect(negativeSvg).toBeInTheDocument()
        })
    })
})
