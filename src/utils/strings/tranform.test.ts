import { type LevelPath, LEVELS_ARRAY } from "@/constants/levels-details"
import {
    parcelCaseToTitleString,
    pathLevelToNumber,
    pathLevelToTitleString,
    toCapitalizedWords,
    toKebabCase,
} from "./transform"

const LEVELS = LEVELS_ARRAY.map((level) => level.name)

describe("toKebabCase", () => {
    it("converts camelCase to kebab-case", () => {
        expect(toKebabCase("camelCaseString")).toBe("camel-case-string")
        expect(toKebabCase("thisIsATest")).toBe("this-is-a-test")
    })

    it("replaces spaces with hyphens", () => {
        expect(toKebabCase("Hello World")).toBe("hello-world")
        expect(toKebabCase("This is a Test")).toBe("this-is-a-test")
    })

    it("converts uppercase words to lowercase", () => {
        expect(toKebabCase("UPPERCASE")).toBe("uppercase")
        expect(toKebabCase("MIXED Case")).toBe("mixed-case")
    })

    it("handles strings with multiple spaces correctly", () => {
        expect(toKebabCase("This   is   a   Test")).toBe("this-is-a-test")
        expect(toKebabCase("   Leading and trailing spaces   ")).toBe(
            "leading-and-trailing-spaces"
        )
    })

    it("handles empty strings", () => {
        expect(toKebabCase("")).toBe("")
    })

    it("handles strings with special characters", () => {
        expect(toKebabCase("Special@Characters!")).toBe("special@characters!")
        expect(toKebabCase("123 Numbers")).toBe("123-numbers")
    })

    it("handles strings that are already kebab-case", () => {
        expect(toKebabCase("already-kebab-case")).toBe("already-kebab-case")
        expect(toKebabCase("no-changes-needed")).toBe("no-changes-needed")
    })
})

describe("toCapitalizedWords", () => {
    it("capitalizes each word in a simple sentence", () => {
        expect(toCapitalizedWords("hello world")).toBe("Hello World")
        expect(toCapitalizedWords("good morning")).toBe("Good Morning")
    })

    it("handles words with mixed cases", () => {
        expect(toCapitalizedWords("hElLo wOrLD")).toBe("Hello World")
        expect(toCapitalizedWords("tHe QuICK Brown FoX")).toBe(
            "The Quick Brown Fox"
        )
    })

    it("handles a string with punctuation correctly", () => {
        expect(toCapitalizedWords("hello-world!")).toBe("Hello World")
        expect(toCapitalizedWords("this_is_a_test")).toBe("This Is A Test")
    })

    it("handles a string with multiple spaces between words", () => {
        expect(toCapitalizedWords("  hello   world  ")).toBe("Hello World")
        expect(toCapitalizedWords("  multiple   spaces ")).toBe(
            "Multiple Spaces"
        )
    })

    it("handles empty strings", () => {
        expect(toCapitalizedWords("")).toBe("")
    })

    it("capitalizes single words", () => {
        expect(toCapitalizedWords("word")).toBe("Word")
        expect(toCapitalizedWords("TEST")).toBe("Test")
    })

    it("handles strings with non-alphabetic characters", () => {
        expect(toCapitalizedWords("123 numbers")).toBe("Numbers")
        expect(toCapitalizedWords("!special characters!")).toBe(
            "Special Characters"
        )
    })
})

describe("pathLevelToNumber", () => {
    it("correctly parses level numbers from valid LevelPath strings", () => {
        expect(pathLevelToNumber("level-1")).toBe(1)
        expect(pathLevelToNumber("level-2")).toBe(2)
        expect(pathLevelToNumber("level-3")).toBe(3)
        expect(pathLevelToNumber("level-4")).toBe(4)
        expect(pathLevelToNumber("level-5")).toBe(5)
        expect(pathLevelToNumber("level-6")).toBe(6)
        expect(pathLevelToNumber("level-7")).toBe(7)
        expect(pathLevelToNumber("level-8")).toBe(8)
        expect(pathLevelToNumber("level-9")).toBe(9)
        expect(pathLevelToNumber("level-10")).toBe(10)
    })

    it("throws an error for invalid LevelPath strings", () => {
        const invalidLevels = [
            "level-", // Missing level number
            "something-1", // Invalid prefix
            "level-abc", // Non-numeric level
            "1-level", // Incorrect format
            "level-11", // Out of range
            "level-0", // Out of range
        ]

        for (const invalidLevel of invalidLevels) {
            expect(() => pathLevelToNumber(invalidLevel as LevelPath)).toThrow(
                `Invalid level format`
            )
        }
    })

    it("handles levelArray entries correctly", () => {
        for (const level of LEVELS) {
            const number = Number.parseInt(level.split("-")[1], 10)
            expect(pathLevelToNumber(level)).toBe(number)
        }
    })
})

describe("pathLevelToTitleString", () => {
    it("correctly converts level paths to title case strings", () => {
        expect(pathLevelToTitleString("level-1")).toBe("Level 1")
        expect(pathLevelToTitleString("level-2")).toBe("Level 2")
        expect(pathLevelToTitleString("level-3")).toBe("Level 3")
        expect(pathLevelToTitleString("level-4")).toBe("Level 4")
        expect(pathLevelToTitleString("level-5")).toBe("Level 5")
        expect(pathLevelToTitleString("level-6")).toBe("Level 6")
        expect(pathLevelToTitleString("level-7")).toBe("Level 7")
        expect(pathLevelToTitleString("level-8")).toBe("Level 8")
        expect(pathLevelToTitleString("level-9")).toBe("Level 9")
        expect(pathLevelToTitleString("level-10")).toBe("Level 10")
    })

    it("throws an error for invalid LevelPath strings", () => {
        const invalidLevels = [
            "level-", // Missing level number
            "something-1", // Invalid prefix
            "level-abc", // Non-numeric level
            "1-level", // Incorrect format
            "level-11", // Out of range
            "level-0", // Out of range
        ]

        for (const invalidLevel of invalidLevels) {
            expect(() =>
                pathLevelToTitleString(invalidLevel as LevelPath)
            ).toThrow(`Invalid level: ${invalidLevel}`)
        }
    })
})

describe("parcelCaseToTitleString", () => {
    it("should convert ParcelCase to title case", () => {
        expect(parcelCaseToTitleString("ParcelCaseString")).toBe(
            "Parcel Case String"
        )
        expect(parcelCaseToTitleString("ThisIsATest")).toBe("This Is A Test")
    })

    it("should handle empty strings", () => {
        expect(parcelCaseToTitleString("")).toBe("")
    })
})
