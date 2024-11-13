"use client"

import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

import { MuiButton, MuiButtonGroup, MuiTypography } from "@/components/libs/mui"
import { MuiArrowDropDownIcon } from "@/components/libs/mui/mui-icons"

import Popper from "./Popper/Popper"

type Properties = {
    options: { label: string; href: string }[]
    defaultIndex: number
}

function DropdownLinks({ options, defaultIndex, ...rest }: Properties) {
    const [open, setOpen] = useState(false)
    const anchorReference = useRef<HTMLDivElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex)
    const router = useRouter()

    const handleMenuItemClick = (
        _event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number
    ) => {
        router.push(options[index].href)
        setSelectedIndex(index)
        setOpen(false)
    }

    const handleToggle = () => {
        setOpen((previousOpen) => !previousOpen)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <MuiButtonGroup
                variant="contained"
                aria-label="Button group with a nested menu"
                {...rest}
                ref={anchorReference}
            >
                <MuiButton onClick={handleToggle}>
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
            <Popper
                anchorRef={anchorReference}
                handleClose={handleClose}
                handleMenuItemClick={handleMenuItemClick}
                open={open}
                options={options}
                selectedIndex={selectedIndex}
            />
        </>
    )
}

export default DropdownLinks
