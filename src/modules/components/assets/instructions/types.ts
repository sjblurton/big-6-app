import { z } from "zod"

export const levelKeysSchema = z.enum([
    "level1",
    "level2",
    "level3",
    "level4",
    "level5",
    "level6",
    "level7",
    "level8",
    "level9",
    "level10",
])

export type LevelKeys = z.infer<typeof levelKeysSchema>

interface InstructionImagesSet {
    positive: () => JSX.Element
    negative: () => JSX.Element
}

export type LevelInstructionImages = {
    [key in LevelKeys]: InstructionImagesSet
}
