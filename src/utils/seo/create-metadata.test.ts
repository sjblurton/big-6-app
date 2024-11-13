import { type Metadata } from "next"

import { createMetadata } from "./create-metadata"

describe("createMetadata", () => {
    it("should create metadata with the correct title and description", () => {
        const title = "Home"
        const description = "Welcome to Big 6 Calisthenics"
        const expectedMetadata: Metadata = {
            title: "Big 6 Calisthenics | Home",
            description,
        }

        const result = createMetadata({ title, description })

        expect(result).toEqual(expectedMetadata)
    })

    it("should handle empty title and description", () => {
        const title = ""
        const description = ""
        const expectedMetadata: Metadata = {
            title: "Big 6 Calisthenics | ",
            description,
        }

        const result = createMetadata({ title, description })

        expect(result).toEqual(expectedMetadata)
    })

    it("should handle long title and description", () => {
        const title = "A very long title that exceeds normal length"
        const description =
            "A very long description that also exceeds normal length"
        const expectedMetadata: Metadata = {
            title: `Big 6 Calisthenics | ${title}`,
            description,
        }

        const result = createMetadata({ title, description })

        expect(result).toEqual(expectedMetadata)
    })
})
