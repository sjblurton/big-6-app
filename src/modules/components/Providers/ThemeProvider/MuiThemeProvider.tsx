"uae client"

import { createTheme, ThemeProvider } from "@mui/material/styles"

import { getTextContrast } from "@/modules/colors/get-text-contrast"
import {
    primary,
    primaryLight,
    secondaryDark,
    secondaryLight,
    white,
} from "@/styles/colors/_exports.module.scss"

const muiTheme = createTheme({
    palette: {
        primary: {
            main: primary,
            dark: primary,
            light: primaryLight,
        },
        secondary: {
            main: secondaryLight,
            light: secondaryDark,
            contrastText: getTextContrast(secondaryDark),
        },
        text: {
            primary: white,
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        h1: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "clamp(2rem, 4vw + 1rem, 4rem)",
            lineHeight: "clamp(2.25rem, 4vw, 4.75rem)",
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
        },
        h2: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "clamp(1.5rem, 2vw + 1rem, 2rem)",
            lineHeight: "2.9rem",
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
        },
        h3: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "clamp(1rem, 2vw + 1rem, 1.5rem)",
            lineHeight: "28px",
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
        },
        body1: {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "1rem",
            lineHeight: "140%",
            letterSpacing: "-0.02em",
        },
        caption: {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "0.875rem",
            lineHeight: "140%",
        },
    },
})

function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}

export default MuiThemeProvider
