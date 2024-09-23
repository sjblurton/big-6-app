import bridges from "./bridges"
import handstands from "./handstands"
import pullUps from "./pull-ups"
import pushUps from "./push-ups"
import legRaises from "./leg-raises"
import squats from "./squats"

const allInstructions = [
    ...bridges,
    ...handstands,
    ...pullUps,
    ...pushUps,
    ...legRaises,
    ...squats,
]

export default allInstructions

export type Instruction = (typeof allInstructions)[number]
