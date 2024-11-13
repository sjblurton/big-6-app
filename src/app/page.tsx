import { MuiContainer, MuiGrid, MuiTypography } from "@/components/libs/mui"
import SignInButton from "@/features/auth/components/client/Button/SignInButton/SignInButton"
import { createMetadata } from "@/utils/seo/create-metadata"

import InstructionsOverviewCardList from "../features/home/components/InstructionsOverviewCardList/InstructionsOverviewCardList"

export const metadata = createMetadata({
    title: "Home",
    description:
        "Progressive calisthenics app based on the book; Convict Conditioning. Track your progress, and keep your focus as you master the Big 6 callisthenics movements!",
})

async function HomePage() {
    return (
        <MuiContainer maxWidth="md" disableGutters>
            <MuiGrid container gap={4} mt={4} mb={6}>
                <MuiGrid item xs={11} m="auto">
                    <MuiTypography variant="h1" component="h1">
                        Big 6
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid item xs={11} m="auto">
                    <MuiTypography variant="h3" component="h2">
                        Calisthenics Training Log Book
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid item xs={11} m="auto">
                    <MuiTypography>
                        Welcome to the Big 6 Calisthenics Training Log Book.
                        This app is based on the book; Convict Conditioning.
                        Track your progress, and keep your focus as you master
                        the Big 6 calisthenics movements!
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid item xs={11} m="auto">
                    <SignInButton />
                </MuiGrid>
                <InstructionsOverviewCardList />
            </MuiGrid>
        </MuiContainer>
    )
}

export default HomePage
