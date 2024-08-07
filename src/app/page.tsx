import { getServerSession } from "next-auth";
// import SignOutButton from "@/modules/components/ui/Button/SignOutButton/SignOutButton";
// import SignInButton from "@/modules/components/ui/Button/SignInButton/SignInButton";
import {
  MuiButton,
  MuiContainer,
  MuiGrid,
  MuiTypography,
} from "@/modules/components/library/mui";
import { MuiGoogleIcon } from "@/modules/components/library/mui/muiIcons";
import InstructionsOverviewCard from "@/modules/components/ui/InstructionsOverviewCard/InstructionsOverviewCard";
import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workoutIds";

import type { Metadata } from "next";
import { BottomNavigation } from "@mui/material";
import authOptions from "./api/auth/authOptions";

export const metadata: Metadata = {
  title: "Big 6 Callisthenics | Home",
  description:
    "Progressive callisthenics app based on the book; Convict Conditioning. Track your progress, and keep your focus as you master the Big 6 callisthenics movements!",
};

async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <MuiContainer maxWidth="md" disableGutters>
      <MuiGrid container gap={4} mt={4} mb={4}>
        <MuiGrid item xs={11} m="auto">
          <MuiTypography variant="h1" component="h1">
            Big 6
          </MuiTypography>
        </MuiGrid>
        <MuiGrid item xs={11} m="auto">
          <MuiTypography variant="h3" component="h2">
            Callisthenics Training Log Book
          </MuiTypography>
        </MuiGrid>
        <MuiGrid item xs={11} m="auto">
          <MuiTypography>
            Welcome to the Big 6 Callisthenics Training Log Book. This app is
            based on the book; Convict Conditioning. Track your progress, and
            keep your focus as you master the Big 6 callisthenics movements!
          </MuiTypography>
        </MuiGrid>
        <MuiGrid item xs={11} m="auto">
          {!session ? (
            <MuiButton
              variant="contained"
              color="inherit"
              sx={{
                color: "black",
                width: "210px",
                justifyContent: "space-between",
              }}
              size="large"
            >
              <MuiGoogleIcon /> Google Login
            </MuiButton>
          ) : (
            <MuiButton
              variant="contained"
              color="inherit"
              sx={{
                color: "black",
                width: "210px",
                justifyContent: "space-between",
              }}
              size="large"
            >
              Logout
            </MuiButton>
          )}
        </MuiGrid>
        {WORKOUT_ID_LIST.map((workoutId) => (
          <MuiGrid item key={workoutId} xs={12}>
            <InstructionsOverviewCard workoutId={workoutId} />
          </MuiGrid>
        ))}
      </MuiGrid>
      {session ? <BottomNavigation /> : null}
    </MuiContainer>
  );
}

export default HomePage;
