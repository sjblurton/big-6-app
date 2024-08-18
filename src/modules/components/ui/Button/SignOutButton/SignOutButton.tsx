"use client"

import { MuiButton } from "@/modules/components/library/mui"
import { MuiLogoutIcon } from "@/modules/components/library/mui/muiIcons"
import { signOut } from "next-auth/react"

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
                signOut()
            }}
        >
            <MuiLogoutIcon /> Sign Out
        </MuiButton>
    )
}

export default SignOutButton
