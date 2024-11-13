import Link from "next/link"
import React from "react"

import {
    MuiBox,
    MuiIconButton,
    MuiMenu,
    MuiMenuIcon,
    MuiToolbar,
    MuiTypography,
} from "@/components/libs/mui"

import LinkItems from "./LinkItems"

import LogoSvg from "../../../server/Logo/Logo"

type Properties = {
    routes: { name: string; path: string }[]
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
    activePage:
        | {
              name: string
              path: string
          }
        | undefined
    anchorElNav: HTMLElement | undefined
    handleCloseNavMenu: () => void
}

function Toolbar({
    routes,
    handleOpenNavMenu,
    activePage,
    anchorElNav,
    handleCloseNavMenu,
}: Properties) {
    return (
        <MuiToolbar disableGutters>
            <MuiBox
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Link href="/" aria-label="link to home">
                    <LogoSvg />
                </Link>
                <MuiTypography
                    variant="h2"
                    component="h1"
                    lineHeight={1.1}
                    textAlign="center"
                    data-testid="nav-active-page"
                >
                    {activePage?.name || ""}
                </MuiTypography>
                <MuiIconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleOpenNavMenu}
                    data-testid="nav-menu-button"
                >
                    <MuiMenuIcon />
                </MuiIconButton>
                <MuiMenu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: "block",
                    }}
                    data-testid="nav-menu"
                >
                    <LinkItems
                        routes={routes}
                        handleCloseNavMenu={handleCloseNavMenu}
                    />
                </MuiMenu>
            </MuiBox>
        </MuiToolbar>
    )
}

export default Toolbar
