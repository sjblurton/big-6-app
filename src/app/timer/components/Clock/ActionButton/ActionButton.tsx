"use client";

import * as background from "@/styles/utilityClasses/background.module.scss";
import { MuiTypography } from "@/modules/components/library/mui";
import * as boarderRadius from "@/styles/utilityClasses/borderRadius.module.scss";
import { button } from "./ActionButton.module.scss";

type Props = {
  startAndStop: () => void;
  isRunning: boolean;
};

function ActionButton({ isRunning, startAndStop }: Props) {
  const buttonClass = `${button} ${isRunning ? background.error : background.success} ${boarderRadius.round}`;

  return (
    <button type="button" className={buttonClass} onClick={startAndStop}>
      <MuiTypography variant="h1" component="h2">
        {isRunning ? "STOP" : "GO"}
      </MuiTypography>
    </button>
  );
}

export default ActionButton;
