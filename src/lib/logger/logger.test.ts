import pino from "pino"

import logger from "./logger"

jest.mock("pino", () => {
    const originalPino = jest.requireActual("pino")
    return jest.fn(() =>
        originalPino({
            transport: {
                target: "pino-pretty",
                options: {
                    colorize: true,
                },
            },
        })
    )
})

describe("logger", () => {
    it("should create a pino logger instance with the correct transport options", () => {
        expect(pino).toHaveBeenCalledWith({
            transport: {
                target: "pino-pretty",
                options: {
                    colorize: true,
                },
            },
        })
    })

    it("should be an instance of the pino logger", () => {
        const actualPino = jest.requireActual("pino")
        expect(logger.constructor).toBe(actualPino().constructor)
    })
})
