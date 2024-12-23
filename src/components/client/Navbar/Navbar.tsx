"use client"

import { usePathname } from "next/navigation"
import React from "react"

import { MuiAppBar, MuiContainer } from "@/components/libs/mui"

import Toolbar from "./components/Toolbar"

export type NavbarProperties = {
    routes: { name: string; path: string }[]
}

function Navbar({ routes }: NavbarProperties) {
    const pathname = usePathname()
    const activePage = routes.find(({ path }) => path === pathname)

    const [anchorElementNav, setAnchorElementNav] = React.useState<
        undefined | HTMLElement
    >()

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElementNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElementNav(undefined)
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
                    anchorElNav={anchorElementNav}
                    handleCloseNavMenu={handleCloseNavMenu}
                    handleOpenNavMenu={handleOpenNavMenu}
                />
            </MuiContainer>
        </MuiAppBar>
    )
}

export default Navbar
