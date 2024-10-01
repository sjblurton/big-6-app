import Link from "next/link"
import React from "react"

import {
    MuiBox,
    MuiIconButton,
    MuiMenu,
    MuiMenuIcon,
    MuiToolbar,
    MuiTypography,
} from "@/modules/components/library/mui"

import LinkItem from "./LinkItem"
import LinkItems from "./LinkItems"

import LogoSvg from "../../Logo/Logo"

type Props = {
    routes: { name: string; path: string }[]
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
    activePage:
        | {
              name: string
              path: string
          }
        | undefined
    anchorElNav: HTMLElement | null
    handleCloseNavMenu: () => void
}

function Toolbar({
    routes,
    handleOpenNavMenu,
    activePage,
    anchorElNav,
    handleCloseNavMenu,
}: Props) {
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

                    <LinkItem
                        path="/dashboard"
                        name="Dashboard"
                        data-testid="nav-menu-link-dashboard"
                        handleCloseNavMenu={handleCloseNavMenu}
                    />
                </MuiMenu>
            </MuiBox>
        </MuiToolbar>
    )
}

export default Toolbar
