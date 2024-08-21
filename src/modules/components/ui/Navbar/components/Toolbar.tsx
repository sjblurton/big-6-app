import {
    MuiBox,
    MuiIconButton,
    MuiMenu,
    MuiMenuIcon,
    MuiMenuItem,
    MuiToolbar,
    MuiTypography,
} from "@/modules/components/library/mui"
import Link from "next/link"
import React from "react"
import { black as blackText } from "@/styles/colors/_exports.module.scss"
import { signOut, useSession } from "next-auth/react"

import LogoSvg from "../../Logo/Logo"
import LinkItems from "./LinkItems"
import LinkItem from "./LinkItem"

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
    const { data: session } = useSession()

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
                    {session ? (
                        <LinkItem
                            path="/dashboard"
                            name="Dashboard"
                            data-testid="nav-menu-link-dashboard"
                            handleCloseNavMenu={handleCloseNavMenu}
                        />
                    ) : null}
                    {session ? (
                        <MuiMenuItem
                            onClick={(e) => {
                                e.preventDefault()
                                signOut({ callbackUrl: "/" })
                                handleCloseNavMenu()
                            }}
                            data-testid="nav-menu-link-logout"
                        >
                            <MuiTypography textAlign="center" color={blackText}>
                                logout
                            </MuiTypography>
                        </MuiMenuItem>
                    ) : null}
                </MuiMenu>
            </MuiBox>
        </MuiToolbar>
    )
}

export default Toolbar
