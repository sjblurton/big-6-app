import Link from "next/link"

import { MuiMenuItem, MuiTypography } from "@/components/libs/mui"
import { black as blackText } from "@/styles/colors/_exports.module.scss"
import { toKebabCase } from "@/utils/strings"

type Properties = {
    path: string
    name: string
    handleCloseNavMenu: () => void
}

function LinkItem({ name, path, handleCloseNavMenu }: Properties) {
    return (
        <Link href={path} data-testid={`nav-menu-link-${toKebabCase(name)}`}>
            <MuiMenuItem
                onClick={handleCloseNavMenu}
                data-testid={`nav-menu-item-${toKebabCase(name)}`}
            >
                <MuiTypography textAlign="center" color={blackText}>
                    {name}
                </MuiTypography>
            </MuiMenuItem>
        </Link>
    )
}

export default LinkItem
