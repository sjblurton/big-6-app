import {
  MuiContainer,
  MuiGrid,
  MuiTypography,
} from "@/modules/components/library/mui";
import Clock from "./components/Clock/Clock";

function TimerPage() {
  return (
    <MuiContainer maxWidth="xs" disableGutters>
      <MuiGrid container gap={4} mt={4} mb={4}>
        <MuiGrid item xs={12} m="auto">
          <MuiTypography variant="h1" component="h1" textAlign="center">
            Timer
          </MuiTypography>
        </MuiGrid>
        <Clock />
      </MuiGrid>
    </MuiContainer>
  );
}

export default TimerPage;
