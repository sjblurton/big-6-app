import * as React from "react";
import * as colors from "../../styles/colors/_exports.module.scss";

import {
  MuiBox,
  MuiGrid,
  MuiPaper,
  MuiTypography,
} from "../components/library/mui";

function ColorPalette() {
  return (
    <MuiBox
      sx={{ flexGrow: 1, backgroundColor: colors.white, p: 4, width: "100vw" }}
    >
      <MuiGrid container spacing={2}>
        <MuiGrid xs={12}>
          <MuiTypography color={colors.black} variant="h1" p={2}>
            Color Palette
          </MuiTypography>
        </MuiGrid>
        <MuiGrid xs={12}>
          <MuiPaper
            sx={{
              height: 100,
              width: "100%",
              backgroundColor: colors.primary,
              p: 2,
            }}
          >
            <MuiTypography variant="body2">Name: Primary</MuiTypography>
            <MuiTypography variant="body2">
              scss: $colors.primary.main
            </MuiTypography>
            <MuiTypography variant="body2">tsx: primary</MuiTypography>
          </MuiPaper>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

export default ColorPalette;
