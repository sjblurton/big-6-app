"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { toKebabCase } from "@/modules/strings/transform";
import { black as blackText } from "@/styles/colors/_exports.module.scss";
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
} from "../../library/mui";
import LogoSvg from "../Logo/Logo";

export type NavbarProps = {
  routes: { name: string; path: string }[];
};

function Navbar({ routes }: NavbarProps) {
  const pathname = usePathname();

  const activePage = routes.find(({ path }) => path === pathname);

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
    <MuiAppBar color="primary" position="static">
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
            <Link href="/" aria-label="link to home">
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
              {routes.length > 0
                ? routes.map(({ name, path }) => (
                    <Link
                      href={path}
                      key={path}
                      data-testid={`nav-menu-link-${toKebabCase(name)}`}
                    >
                      <MuiMenuItem
                        onClick={handleCloseNavMenu}
                        data-testid={`nav-menu-item-${toKebabCase(name)}`}
                      >
                        <MuiTypography textAlign="center" color={blackText}>
                          {name}
                        </MuiTypography>
                      </MuiMenuItem>
                    </Link>
                  ))
                : null}
            </MuiMenu>
          </MuiBox>
        </MuiToolbar>
      </MuiContainer>
    </MuiAppBar>
  );
}

export default Navbar;
