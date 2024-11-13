import { MuiGrid, MuiTypography, type Variant } from "@/components/libs/mui"

function TypographyCard({ heading }: { heading: Variant }) {
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

export default TypographyCard
