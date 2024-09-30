import { TIME_MILLISECONDS, TIME_SECONDS } from "./constants"

describe("TIME_MILLISECONDS", () => {
    it("should have correct values for time in milliseconds", () => {
        expect(TIME_MILLISECONDS.ONE_SECOND).toBe(1000)
        expect(TIME_MILLISECONDS.ONE_MINUTE).toBe(60000)
        expect(TIME_MILLISECONDS.ONE_HOUR).toBe(3600000)
        expect(TIME_MILLISECONDS.ONE_DAY).toBe(86400000)
        expect(TIME_MILLISECONDS.ONE_WEEK).toBe(604800000)
    })
})

describe("TIME_SECONDS", () => {
    it("should have correct values for time in seconds", () => {
        expect(TIME_SECONDS.ONE_SECOND).toBe(1)
        expect(TIME_SECONDS.ONE_MINUTE).toBe(60)
        expect(TIME_SECONDS.ONE_HOUR).toBe(3600)
        expect(TIME_SECONDS.ONE_DAY).toBe(86400)
        expect(TIME_SECONDS.ONE_WEEK).toBe(604800)
    })
})
