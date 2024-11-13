import * as React from "react"

import { MuiBox, MuiGrid, MuiTypography } from "@/components/libs/mui"
import * as colors from "@/styles/colors/_exports.module.scss"
import { getTextContrast } from "@/utils/colors/get-text-contrast"
import { parcelCaseToTitleString } from "@/utils/strings/transform"

import ColorCard from "./ColorCard/ColorCard"

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
                        name={parcelCaseToTitleString(key)}
                        variable={key}
                        textColor={getTextContrast(value)}
                    />
                ))}
            </MuiGrid>
        </MuiBox>
    )
}

export default ColorPalette
