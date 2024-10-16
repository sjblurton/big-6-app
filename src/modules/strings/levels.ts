import { z } from "zod"

export const LEVELS = [
    "level-1",
    "level-2",
    "level-3",
    "level-4",
    "level-5",
    "level-6",
    "level-7",
    "level-8",
    "level-9",
    "level-10",
] as const

export const levelPathSchema = z.enum(LEVELS)

export type LevelPath = z.infer<typeof levelPathSchema>
