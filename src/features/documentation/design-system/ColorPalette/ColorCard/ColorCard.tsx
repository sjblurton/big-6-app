import { MuiGrid, MuiPaper, MuiTypography } from "@/components/libs/mui"

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

export default ColorCard
