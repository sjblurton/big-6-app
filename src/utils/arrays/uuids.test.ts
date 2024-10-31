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
        array.forEach((uuid) => {
            expect(uuid).toMatch(
                /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
            )
        })
    })
})
