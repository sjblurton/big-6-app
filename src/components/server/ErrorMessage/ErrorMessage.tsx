import ErrorMan from "./ErrorManSvg"

import { MuiBox, MuiButton, MuiContainer, MuiTypography } from "../../libs/mui"

function ErrorMessage({
    message,
    reset,
}: {
    message: string
    reset: () => void
}) {
    // TODO: Add error logging to an external service
    return (
        <MuiContainer
            maxWidth="xs"
            sx={{
                minHeight: "calc(100vh - 64px)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <MuiBox
                component="div"
                pt={2}
                pb={10}
                sx={{
                    height: "100%",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <ErrorMan />
                <MuiTypography variant="h2" textAlign="center">
                    {message}
                </MuiTypography>
                <MuiButton onClick={reset} variant="contained" color="primary">
                    Try Again
                </MuiButton>
            </MuiBox>
        </MuiContainer>
    )
}

export default ErrorMessage
