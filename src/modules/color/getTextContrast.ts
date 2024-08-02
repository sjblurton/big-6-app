import { getLuminance } from "@mui/material/styles";
import { black, white } from "@/styles/colors/_exports.module.scss";

export const getTextContrast = (backgroundColor: string) =>
  getLuminance(backgroundColor) > 0.5 ? black : white;
