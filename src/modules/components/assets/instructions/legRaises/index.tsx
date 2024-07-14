import L1pos from "./level1/pos";
import L1neg from "./level1/neg";
import L2pos from "./level2/pos";
import L2neg from "./level2/neg";
import L3pos from "./level3/pos";
import L3neg from "./level3/neg";
import L4pos from "./level4/pos";
import L4neg from "./level4/neg";
import L5pos from "./level5/pos";
import L5neg from "./level5/neg";
import L6pos from "./level6/pos";
import L6neg from "./level6/neg";
import L7pos from "./level7/pos";
import L7neg from "./level7/neg";
import L8pos from "./level8/pos";
import L8neg from "./level8/neg";
import L9pos from "./level9/pos";
import L9neg from "./level9/neg";
import L10pos from "./level10/pos";
import L10neg from "./level10/neg";
import { LevelInstructionImages } from "../types";

export const legRaisesInstructionImages: LevelInstructionImages = {
  level1: {
    positive: L1pos,
    negative: L1neg,
  },
  level2: {
    positive: L2pos,
    negative: L2neg,
  },
  level3: {
    positive: L3pos,
    negative: L3neg,
  },
  level4: {
    positive: L4pos,
    negative: L4neg,
  },
  level5: {
    positive: L5pos,
    negative: L5neg,
  },
  level6: {
    positive: L6pos,
    negative: L6neg,
  },
  level7: {
    positive: L7pos,
    negative: L7neg,
  },
  level8: {
    positive: L8pos,
    negative: L8neg,
  },
  level9: {
    positive: L9pos,
    negative: L9neg,
  },
  level10: {
    positive: L10pos,
    negative: L10neg,
  },
} as const;
