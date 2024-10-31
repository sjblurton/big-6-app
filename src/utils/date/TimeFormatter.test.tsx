import TimeFormatter from "./TimeFormatter"

const TIME_SAMPLE_1 = 12_345
const TIME_SAMPLE_2 = 6000
const TIME_SAMPLE_3 = 6100
const TIME_SAMPLE_4 = 360_000
const TIME_SAMPLE_5 = 720_000

describe("TimeFormatter", () => {
    test("getSeconds should return correct seconds", () => {
        expect(TimeFormatter.getSeconds(TIME_SAMPLE_1)).toBe("03")
        expect(TimeFormatter.getSeconds(TIME_SAMPLE_2)).toBe("00")
        expect(TimeFormatter.getSeconds(TIME_SAMPLE_3)).toBe("01")
    })

    test("getMinutes should return correct minutes", () => {
        expect(TimeFormatter.getMinutes(TIME_SAMPLE_1)).toBe("02")
        expect(TimeFormatter.getMinutes(TIME_SAMPLE_4)).toBe("60")
        expect(TimeFormatter.getMinutes(TIME_SAMPLE_5)).toBe("120")
    })

    test("getMilliseconds should return correct milliseconds", () => {
        expect(TimeFormatter.getMilliseconds(TIME_SAMPLE_1)).toBe("45")
        expect(TimeFormatter.getMilliseconds(TIME_SAMPLE_2)).toBe("00")
        expect(TimeFormatter.getMilliseconds(TIME_SAMPLE_3)).toBe("00")
    })
})
