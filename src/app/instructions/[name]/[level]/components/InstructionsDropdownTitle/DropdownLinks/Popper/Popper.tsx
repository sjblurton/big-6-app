import {
    MuiClickAwayListener,
    MuiGrow,
    MuiPaper,
    MuiPopper,
} from "@/modules/components/library/mui"
import { RefObject } from "react"
import MenuList from "./MenuList/MenuList"

type Props = {
    options: { label: string; href: string }[]
    selectedIndex: number
    handleMenuItemClick: (
        _event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number
    ) => void
    open: boolean
    anchorRef: RefObject<HTMLDivElement>
    handleClose: (event: Event) => void
}

function Popper({
    options,
    selectedIndex,
    handleMenuItemClick,
    anchorRef,
    open,
    handleClose,
}: Props) {
    return (
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
                            <MenuList
                                handleMenuItemClick={handleMenuItemClick}
                                options={options}
                                selectedIndex={selectedIndex}
                            />
                        </MuiClickAwayListener>
                    </MuiPaper>
                </MuiGrow>
            )}
        </MuiPopper>
    )
}

export default Popper
