import Link from "next/link"

import { MuiMenuItem, MuiTypography } from "@/modules/components/library/mui"
import { toKebabCase } from "@/modules/strings/transform"
import { black as blackText } from "@/styles/colors/_exports.module.scss"

type Props = {
    path: string
    name: string
    handleCloseNavMenu: () => void
}

function LinkItem({ name, path, handleCloseNavMenu }: Props) {
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
