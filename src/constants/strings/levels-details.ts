export const LEVELS_CONSTANTS = {
    level1: { value: 1, name: "level-1", title: "Level 1" },
    level2: { value: 2, name: "level-2", title: "Level 2" },
    level3: { value: 3, name: "level-3", title: "Level 3" },
    level4: { value: 4, name: "level-4", title: "Level 4" },
    level5: { value: 5, name: "level-5", title: "Level 5" },
    level6: { value: 6, name: "level-6", title: "Level 6" },
    level7: { value: 7, name: "level-7", title: "Level 7" },
    level8: { value: 8, name: "level-8", title: "Level 8" },
    level9: { value: 9, name: "level-9", title: "Level 9" },
    level10: { value: 10, name: "level-10", title: "Level 10" },
} as const

export const LEVELS_ARRAY = Object.values(LEVELS_CONSTANTS)

export type LevelPath =
    (typeof LEVELS_CONSTANTS)[keyof typeof LEVELS_CONSTANTS]["name"]
