"use client"

import { MuiButton } from "@/modules/components/library/mui"
import { MuiGoogleIcon } from "@/modules/components/library/mui/mui-icons"

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
            onClick={(e) => {
                e.preventDefault()
                console.log("Sign in button clicked") // eslint-disable-line no-console -- remove this line after testing
            }}
        >
            <MuiGoogleIcon /> Google Login
        </MuiButton>
    )
}

export default SignInButton
