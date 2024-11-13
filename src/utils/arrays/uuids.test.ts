import { createUUIDs } from "./uuids"

describe("uuids", () => {
    it("should create an array of UUIDs with the correct length", () => {
        const array = createUUIDs(10)
        expect(array).toHaveLength(10)
    })

    it("should create an array of UUIDs with unique values", () => {
        const array = createUUIDs(10)
        const set = new Set(array)
        expect(set.size).toEqual(array.length)
    })

    it("should create an array of UUIDs with valid UUID values", () => {
        const array = createUUIDs(10)
        for (const uuid of array) {
            expect(uuid).toMatch(
                /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/
            )
        }
    })
})
