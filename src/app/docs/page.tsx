import {
  MuiBox,
  MuiContainer,
  MuiTypography,
} from "@/modules/components/ui/library/mui";
import { white as textColorWhite } from "@/styles/utilityClasses/typography.module.scss";

function Docs() {
  return (
    <MuiContainer maxWidth="lg">
      <MuiBox
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MuiTypography
          variant="h2"
          component="h1"
          sx={{ mb: 2 }}
          className={textColorWhite}
        >
          Documentation
        </MuiTypography>
      </MuiBox>
    </MuiContainer>
  );
}

export default Docs;
