"use client"
import { v4 as UUIDv4 } from "uuid"

import { MuiGrid } from "@/modules/components/library/mui"

import LevelRadioButton from "./LevelRadioButton/LevelRadioButton"

const levelsKeysAndValues = Array.from({ length: 10 }).map((_, index) => ({
    key: UUIDv4(),
    value: (index + 1).toString(),
}))

function LevelsRadio() {
    return (
        <MuiGrid
            container
            spacing={3}
            mt={3}
            marginInline="auto"
            justifyContent="center"
        >
            {levelsKeysAndValues.map(({ key, value }) => (
                <MuiGrid
                    item
                    key={key}
                    xs={4}
                    justifyContent="center"
                    alignItems="center"
                >
                    <LevelRadioButton level={value} />
                </MuiGrid>
            ))}
        </MuiGrid>
    )
}

export default LevelsRadio
