"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
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
} from "../../library/mui/mui-icons"
import * as styles from "./BottomNavigation.module.scss"

const navigation = [
    { value: "/dashboard", label: "Dashboard", icon: <MuiHomeIcon /> },
    { value: "/log", label: "Log", icon: <MuiClipboardIcon /> },
    { value: "/calender", label: "Calender", icon: <MuiCalendarMonthIcon /> },
    { value: "/stopwatch", label: "Stop Watch", icon: <MuiTimerIcon /> },
]

function BottomNavigation() {
    const pathname = usePathname()

    return (
        <MuiPaper
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: "center",
                display: pathname.startsWith("/studio")
                    ? "none"
                    : "inline-flex",
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
                    maxWidth: "md",
                    margin: "auto",
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
