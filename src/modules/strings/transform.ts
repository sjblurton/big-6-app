import {
    levelArray,
    type LevelPath,
} from "../model/api/routes/instructions-id-level/constants/levels"
import {
    WORKOUT_ID_LIST,
    type WorkoutIds,
} from "../model/api/routes/shared/workout-ids"

export function toKebabCase(str: string) {
    return str
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
    const cleanedName = name.replace(/[^a-zA-Z]+/g, " ")
    const words = cleanedName.match(/[a-zA-Z][a-zA-Z]*/g) || []

    return words.map((word) => capitalize(word.toLowerCase())).join(" ")
}

export function pathLevelToNumber(level: LevelPath) {
    if (!levelArray.includes(level)) {
        throw new Error(`Invalid level: ${level}`)
    }
    return parseInt(level.split("-")[1], 10)
}

export function pathLevelToTitleString(level: LevelPath) {
    if (!levelArray.includes(level)) {
        throw new Error(`Invalid level: ${level}`)
    }
    return level.split("-").map(capitalize).join(" ")
}

export function workoutIdToTitleString(id: WorkoutIds) {
    if (!WORKOUT_ID_LIST.includes(id)) {
        throw new Error(`Invalid workout id: ${id}`)
    }
    return id.split("-").map(toCapitalizedWords).join(" ")
}
