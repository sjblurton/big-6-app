"use client"

import { usePathname } from "next/navigation"

import Link from "next/link"
import { useMediaQuery } from "@mui/material"
import {
    MuiBottomNavigation,
    MuiBottomNavigationAction,
    MuiFloatingActionButton,
    MuiPaper,
} from "../../library/mui"
import {
    MuiAddIcon,
    MuiCalendarMonthIcon,
    MuiClipboardIcon,
    MuiHomeIcon,
    MuiTimerIcon,
} from "../../library/mui/muiIcons"
import * as styles from "./BottomNavigation.module.scss"

const navigation = [
    { value: "/dashboard", label: "Dashboard", icon: <MuiHomeIcon /> },
    { value: "/log", label: "Log", icon: <MuiClipboardIcon /> },
    { value: "/calender", label: "Calender", icon: <MuiCalendarMonthIcon /> },
    { value: "/timer", label: "Timer", icon: <MuiTimerIcon /> },
]

function BottomNavigation() {
    const pathname = usePathname()
    const isMobile = useMediaQuery("(max-width: 600px)")

    return (
        <MuiPaper
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                display: isMobile ? "flex" : "none",
                justifyContent: "center",
            }}
            elevation={3}
        >
            <div className={styles.add}>
                <MuiFloatingActionButton
                    color="warning"
                    aria-label="add"
                    LinkComponent={Link}
                    href="/add"
                >
                    <MuiAddIcon fontSize="large" />
                </MuiFloatingActionButton>
            </div>
            <MuiBottomNavigation
                value={pathname}
                sx={{
                    width: "100%",
                }}
            >
                {navigation.map((nav) => (
                    <MuiBottomNavigationAction
                        key={nav.value}
                        label={nav.label}
                        icon={nav.icon}
                        value={nav.value}
                        href={nav.value}
                        component={Link}
                    />
                ))}
            </MuiBottomNavigation>
        </MuiPaper>
    )
}

export default BottomNavigation
