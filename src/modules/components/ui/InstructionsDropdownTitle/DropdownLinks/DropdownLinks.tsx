"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
    MuiButton,
    MuiButtonGroup,
    MuiClickAwayListener,
    MuiGrow,
    MuiMenuItem,
    MuiMenuList,
    MuiPaper,
    MuiPopper,
    MuiTypography,
} from "../../../library/mui"
import { MuiArrowDropDownIcon } from "../../../library/mui/muiIcons"

type Props = {
    options: { label: string; href: string }[]
    defaultIndex: number
}

function DropdownLinks({ options, defaultIndex, ...rest }: Props) {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLDivElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex)
    const { push } = useRouter()

    const handleMenuItemClick = (
        _event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number
    ) => {
        push(options[index].href)
        setSelectedIndex(index)
        setOpen(false)
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return
        }

        setOpen(false)
    }

    return (
        <>
            <MuiButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
                {...rest}
            >
                <MuiButton
                    LinkComponent={Link}
                    href={options[selectedIndex].href}
                >
                    <MuiTypography variant="h1" component="h3">
                        {options[selectedIndex].label}
                    </MuiTypography>
                </MuiButton>
                <MuiButton
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label={options[selectedIndex].label}
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <MuiArrowDropDownIcon />
                </MuiButton>
            </MuiButtonGroup>
            <MuiPopper
                placement="bottom-start"
                sx={{
                    zIndex: 1,
                    width: anchorRef.current?.clientWidth,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <MuiGrow
                        {...TransitionProps}
                        style={{
                            transformOrigin: "top right",
                        }}
                    >
                        <MuiPaper>
                            <MuiClickAwayListener onClickAway={handleClose}>
                                <MuiMenuList
                                    id="split-button-menu"
                                    autoFocusItem
                                >
                                    {options.map((option, index) => (
                                        <MuiMenuItem
                                            sx={{ color: "black" }}
                                            key={option.label}
                                            selected={index === selectedIndex}
                                            onClick={(event) =>
                                                handleMenuItemClick(
                                                    event,
                                                    index
                                                )
                                            }
                                        >
                                            {option.label}
                                        </MuiMenuItem>
                                    ))}
                                </MuiMenuList>
                            </MuiClickAwayListener>
                        </MuiPaper>
                    </MuiGrow>
                )}
            </MuiPopper>
        </>
    )
}

export default DropdownLinks
