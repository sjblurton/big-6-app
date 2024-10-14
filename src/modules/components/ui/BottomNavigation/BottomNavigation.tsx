"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ROUTES } from "@/modules/constants/routes"

import * as styles from "./BottomNavigation.module.scss"

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

const navigation: { value: string; label: string; icon: React.ReactNode }[] = [
    {
        value: ROUTES.dashboard.value,
        label: ROUTES.dashboard.label,
        icon: <MuiHomeIcon />,
    },
    {
        value: ROUTES.log.value,
        label: ROUTES.log.label,
        icon: <MuiClipboardIcon />,
    },
    {
        value: ROUTES.routines.value,
        label: ROUTES.routines.label,
        icon: <MuiCalendarMonthIcon />,
    },
    {
        value: ROUTES.stopwatch.value,
        label: ROUTES.stopwatch.label,
        icon: <MuiTimerIcon />,
    },
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
                display: pathname.startsWith(ROUTES.studio.value)
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
                    href={ROUTES.add.value}
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
