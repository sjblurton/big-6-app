import { bridgesInstructionImages } from "./bridges"
import { handstandsInstructionImages } from "./handstands"
import { legRaisesInstructionImages } from "./legRaises"
import { pushUpsInstructionImages } from "./pushUps"
import { pullUpsInstructionImages } from "./pullUps"
import { squatsInstructionImages } from "./squats"

const instructionImages = {
    bridges: bridgesInstructionImages,
    handstands: handstandsInstructionImages,
    "leg-raises": legRaisesInstructionImages,
    "push-ups": pushUpsInstructionImages,
    "pull-ups": pullUpsInstructionImages,
    squats: squatsInstructionImages,
} as const

export default instructionImages

export type InstructionImagesKeys = keyof typeof instructionImages
