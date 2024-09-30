"use client"

import { MuiButton } from "@/modules/components/library/mui"
import { MuiLogoutIcon } from "@/modules/components/library/mui/mui-icons"

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
            onClick={(e) => {
                e.preventDefault()
                console.log("Sign out button clicked") // eslint-disable-line no-console -- remove this line after testing
            }}
        >
            <MuiLogoutIcon /> Sign Out
        </MuiButton>
    )
}

export default SignOutButton
