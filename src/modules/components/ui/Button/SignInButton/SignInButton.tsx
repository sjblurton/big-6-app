"use client"

import { MuiButton } from "@/modules/components/library/mui"
import { MuiGoogleIcon } from "@/modules/components/library/mui/muiIcons"
import { signIn } from "next-auth/react"

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
                signIn("google", {
                    callbackUrl: "/dashboard",
                })
            }}
        >
            <MuiGoogleIcon /> Google Login
        </MuiButton>
    )
}

export default SignInButton
