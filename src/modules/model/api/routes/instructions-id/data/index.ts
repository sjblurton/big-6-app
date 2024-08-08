import bridges from "./bridges";
import handstands from "./handstands";
import pullUps from "./pullUps";
import pushUps from "./pushUps";
import legRaises from "./legRaises";
import squats from "./squats";

const allInstructions = [
  ...bridges,
  ...handstands,
  ...pullUps,
  ...pushUps,
  ...legRaises,
  ...squats,
];

export default allInstructions;

export type Instruction = (typeof allInstructions)[number];
