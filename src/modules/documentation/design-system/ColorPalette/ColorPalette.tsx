import * as React from "react"
import * as colors from "../../../../styles/colors/_exports.module.scss"
import {
    MuiBox,
    MuiGrid,
    MuiPaper,
    MuiTypography,
} from "../../../components/library/mui"
import { toCapitalizedWords } from "../../../strings/transform"
import { getTextContrast } from "../../../colors/get-text-contrast"

function ColorCard({
    color,
    name,
    variable,
    textColor,
}: {
    color: string
    name: string
    variable: string
    textColor: string
}) {
    return (
        <MuiGrid xs={12}>
            <MuiPaper
                sx={{
                    height: 100,
                    width: "100%",
                    backgroundColor: color,
                    p: 2,
                    m: 1,
                }}
                elevation={3}
            >
                <MuiTypography variant="h3" color={textColor}>
                    Name: {name}
                </MuiTypography>
                <MuiTypography variant="h3" color={textColor}>
                    variable: {variable}
                </MuiTypography>
            </MuiPaper>
        </MuiGrid>
    )
}

function ColorPalette() {
    const colorsList = Object.entries(colors)
        .map(([key, value]) => ({
            value,
            key,
        }))
        .filter(({ key }) => key !== "default")

    return (
        <MuiBox
            sx={{
                flexGrow: 1,
                backgroundColor: colors.white,
                p: 4,
                width: "100%",
                maxWidth: 800,
            }}
        >
            <MuiGrid container spacing={2}>
                <MuiGrid xs={12}>
                    <MuiTypography color={colors.black} variant="h1" p={2}>
                        Color Palette
                    </MuiTypography>
                </MuiGrid>
                {colorsList.map(({ key, value }) => (
                    <ColorCard
                        key={key}
                        color={value}
                        name={toCapitalizedWords(key)}
                        variable={key}
                        textColor={getTextContrast(value)}
                    />
                ))}
            </MuiGrid>
        </MuiBox>
    )
}

export default ColorPalette
