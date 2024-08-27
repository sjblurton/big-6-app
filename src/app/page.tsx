import { getServerSession } from "next-auth"
import {
    MuiContainer,
    MuiGrid,
    MuiTypography,
} from "@/modules/components/library/mui"

import type { Metadata } from "next"
import SignInButton from "@/modules/components/ui/Button/SignInButton/SignInButton"
import SignOutButton from "@/modules/components/ui/Button/SignOutButton/SignOutButton"
import { createMetadata } from "@/modules/seo/createMetadata"
import authOptions from "./api/auth/authOptions"
import InstructionsOverviewCardList from "./components/InstructionsOverviewCardList/InstructionsOverviewCardList"

export const metadata: Metadata = createMetadata({
    title: "Home",
    description:
        "Progressive callisthenics app based on the book; Convict Conditioning. Track your progress, and keep your focus as you master the Big 6 callisthenics movements!",
})

async function HomePage() {
    const session = await getServerSession(authOptions)

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
                        Callisthenics Training Log Book
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid item xs={11} m="auto">
                    <MuiTypography>
                        Welcome to the Big 6 Callisthenics Training Log Book.
                        This app is based on the book; Convict Conditioning.
                        Track your progress, and keep your focus as you master
                        the Big 6 callisthenics movements!
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid item xs={11} m="auto">
                    {!session ? <SignInButton /> : <SignOutButton />}
                </MuiGrid>
                <InstructionsOverviewCardList />
            </MuiGrid>
        </MuiContainer>
    )
}

export default HomePage
