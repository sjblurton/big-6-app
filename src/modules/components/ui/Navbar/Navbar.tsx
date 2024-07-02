"use client";

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toKebabCase } from "@/modules/strings/transform";
import {
  MuiAppBar,
  MuiBox,
  MuiContainer,
  MuiIconButton,
  MuiMenu,
  MuiMenuIcon,
  MuiMenuItem,
  MuiToolbar,
  MuiTypography,
} from "../library/mui";
import LogoSvg from "../Logo/Logo";
import { primary } from "./Navbar.module.scss";
import { pages } from "./routes";

function Navbar() {
  const { pathname } = useRouter();

  const activePage = pages.find(({ path }) => path === pathname);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar className={primary} position="static">
      <MuiContainer maxWidth="md">
        <MuiToolbar disableGutters>
          <MuiBox
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <LogoSvg />
            </Link>
            <MuiTypography
              variant="h6"
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
              {pages.map(({ name, path }) => (
                <Link
                  href={path}
                  key={path}
                  data-testid={`nav-menu-link-${toKebabCase(name)}`}
                >
                  <MuiMenuItem
                    onClick={handleCloseNavMenu}
                    data-testid={`nav-menu-item-${toKebabCase(name)}`}
                  >
                    <MuiTypography textAlign="center">{name}</MuiTypography>
                  </MuiMenuItem>
                </Link>
              ))}
            </MuiMenu>
          </MuiBox>
        </MuiToolbar>
      </MuiContainer>
    </MuiAppBar>
  );
}

export default Navbar;
