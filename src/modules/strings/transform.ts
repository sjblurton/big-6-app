import { type LevelPath, LEVELS } from "./levels"

export function toKebabCase(string: string) {
    return string
        .trim()
        .replace(/(?<lower>[a-z])(?<upper>[A-Z])/g, "$<lower>-$<upper>")
        .replace(
            /(?<upper>[A-Z])(?<nextUpper>[A-Z][a-z])/g,
            "$<upper>-$<nextUpper>"
        )
        .replace(/\s+/g, "-")
        .toLowerCase()
}

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1)
}

export function toCapitalizedWords(name: string) {
    const cleanedName = name.replace(/[^A-Za-z]+/g, " ")
    const words = cleanedName.match(/[A-Za-z]+/g) || []

    return words.map((word) => capitalize(word.toLowerCase())).join(" ")
}

export function pathLevelToNumber(level: string): number {
    const levelMatch = /^level-(?<levelNumber>10|[1-9])$/.exec(level)
    if (!levelMatch) {
        throw new Error("Invalid level format")
    }
    return parseInt(levelMatch[1], 10)
}

export function pathLevelToTitleString(level: LevelPath) {
    if (!LEVELS.includes(level)) {
        throw new Error(`Invalid level: ${level}`)
    }
    return level.split("-").map(capitalize).join(" ")
}
