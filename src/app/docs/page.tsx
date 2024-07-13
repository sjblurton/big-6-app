import {
  MuiBox,
  MuiContainer,
  MuiTypography,
} from "@/modules/components/ui/library/mui";

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
        <MuiTypography variant="h2" component="h1" sx={{ mb: 2 }}>
          Documentation
        </MuiTypography>
      </MuiBox>
    </MuiContainer>
  );
}

export default Docs;
