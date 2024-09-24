"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { SessionProvider } from "next-auth/react"
import { MuiAppBar, MuiContainer } from "../../library/mui"
import Toolbar from "./components/Toolbar"

export type NavbarProps = {
    routes: { name: string; path: string }[]
}

function Navbar({ routes }: NavbarProps) {
    const pathname = usePathname()
    const activePage = routes.find(({ path }) => path === pathname)

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <SessionProvider>
            <MuiAppBar
                color="primary"
                position="static"
                sx={{ display: pathname.includes("studio") ? "none" : "flex" }}
            >
                <MuiContainer maxWidth="md">
                    <Toolbar
                        routes={routes}
                        activePage={activePage}
                        anchorElNav={anchorElNav}
                        handleCloseNavMenu={handleCloseNavMenu}
                        handleOpenNavMenu={handleOpenNavMenu}
                    />
                </MuiContainer>
            </MuiAppBar>
        </SessionProvider>
    )
}

export default Navbar
