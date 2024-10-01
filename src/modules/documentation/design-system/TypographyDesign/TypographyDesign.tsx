import React from "react"

import { MuiBox, MuiGrid, MuiTypography } from "../../../components/library/mui"

const headingsList = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "body2",
] as const

type Headings = (typeof headingsList)[number]

function TypographyCard({ heading }: { heading: Headings }) {
    return (
        <MuiGrid xs={12} p={2}>
            <MuiTypography
                variant={heading}
                lineHeight={heading === "h1" ? 1.1 : 1}
            >
                {heading}: A quick brown fox jumps over the lazy dog
            </MuiTypography>
        </MuiGrid>
    )
}

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
