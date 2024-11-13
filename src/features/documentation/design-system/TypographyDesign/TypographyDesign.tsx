import React from "react"

import { MuiBox, MuiGrid, MuiTypography, type Variant } from "@/components/libs/mui"

import TypographyCard from "./TypographyCard/TypographyCard"

const headingsList: Variant[] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "body2",
] as const

function TypographyDesign() {
    return (
        <MuiBox
            sx={{
                flexGrow: 1,
                p: 4,
                width: "100%",
            }}
        >
            <MuiGrid container spacing={2}>
                <MuiGrid xs={12}>
                    <MuiTypography variant="h1" p={2}>
                        Typography Design
                    </MuiTypography>
                </MuiGrid>
                {headingsList.map((heading) => (
                    <TypographyCard key={heading} heading={heading} />
                ))}
            </MuiGrid>
        </MuiBox>
    )
}

export default TypographyDesign
