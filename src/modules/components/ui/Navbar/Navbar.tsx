"use client"

import { usePathname } from "next/navigation"
import React from "react"

import Toolbar from "./components/Toolbar"

import { MuiAppBar, MuiContainer } from "../../library/mui"

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
    )
}

export default Navbar
