"use client"

import { MuiButton } from "@/components/libs/mui"
import { MuiGoogleIcon } from "@/components/libs/mui/mui-icons"

function SignInButton() {
    return (
        <MuiButton
            variant="contained"
            color="inherit"
            sx={{
                color: "black",
                width: "210px",
                justifyContent: "space-evenly",
            }}
            size="large"
            onClick={(error) => {
                error.preventDefault()
                console.log("Sign in button clicked") // eslint-disable-line no-console -- remove this line after testing
            }}
        >
            <MuiGoogleIcon /> Google Login
        </MuiButton>
    )
}

export default SignInButton
