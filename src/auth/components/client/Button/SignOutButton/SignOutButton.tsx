"use client"

import { MuiButton } from "@/components/libs/mui"
import { MuiLogoutIcon } from "@/components/libs/mui/mui-icons"

function SignOutButton() {
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
                console.log("Sign out button clicked") // eslint-disable-line no-console -- remove this line after testing
            }}
        >
            <MuiLogoutIcon /> Sign Out
        </MuiButton>
    )
}

export default SignOutButton
