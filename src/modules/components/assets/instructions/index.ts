import { bridgesInstructionImages } from "./bridges";
import { handstandsInstructionImages } from "./handstands";
import { legRaisesInstructionImages } from "./legRaises";
import { pushUpsInstructionImages } from "./pushUps";
import { pullUpsInstructionImages } from "./pullUps";
import { squatsInstructionImages } from "./squats";

const instructionImages = {
  bridges: bridgesInstructionImages,
  handstands: handstandsInstructionImages,
  legRaises: legRaisesInstructionImages,
  pushUps: pushUpsInstructionImages,
  pullUps: pullUpsInstructionImages,
  squats: squatsInstructionImages,
} as const;

export default instructionImages;
