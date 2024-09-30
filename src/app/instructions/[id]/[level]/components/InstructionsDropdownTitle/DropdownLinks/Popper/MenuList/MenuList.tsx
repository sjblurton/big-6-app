import { MuiMenuItem, MuiMenuList } from "@/modules/components/library/mui"

type Props = {
    options: { label: string; href: string }[]
    selectedIndex: number
    handleMenuItemClick: (
        _event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number
    ) => void
}

function MenuList({ options, selectedIndex, handleMenuItemClick }: Props) {
    return (
        <MuiMenuList id="split-button-menu" autoFocusItem>
            {options.map((option, index) => (
                <MuiMenuItem
                    sx={{ color: "black" }}
                    key={option.label}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                >
                    {option.label}
                </MuiMenuItem>
            ))}
        </MuiMenuList>
    )
}

export default MenuList
