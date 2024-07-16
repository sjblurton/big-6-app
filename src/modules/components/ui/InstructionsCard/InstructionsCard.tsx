import * as background from "@/styles/utilityClasses/background.module.scss";
import * as shadow from "@/styles/utilityClasses/boxShadow.module.scss";
import * as padding from "@/styles/utilityClasses/padding.module.scss";
import * as borderRadius from "@/styles/utilityClasses/borderRadius.module.scss";
import * as flex from "@/styles/utilityClasses/flex.module.scss";
import * as styles from "./InstructionsCard.module.scss";
import instructionImages, {
  InstructionImagesKeys,
} from "../../assets/instructions";
import { LevelKeys } from "../../assets/instructions/types";
import { MuiTypography } from "../../library/mui";

const svgSelector = (
  workoutKey: InstructionImagesKeys,
  levelKey: LevelKeys,
  positive: boolean,
) =>
  instructionImages[workoutKey][levelKey][positive ? "positive" : "negative"];

function InstructionsCard() {
  const wrapper = [
    flex.center,
    flex.column,
    styles.wrapper,
    background.light,
    shadow.shadow,
    padding.p2,
    borderRadius.large,
  ].join(" ");

  const Svg = svgSelector("bridges", "level1", true);

  return (
    <div className={wrapper}>
      <MuiTypography variant="h3">Title</MuiTypography>
      <div className={`${flex.center} ${padding.p1}`}>
        <Svg />
      </div>
      <MuiTypography p={1} variant="body1">
        Description
      </MuiTypography>
    </div>
  );
}

export default InstructionsCard;
