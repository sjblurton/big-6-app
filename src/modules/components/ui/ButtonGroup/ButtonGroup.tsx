import * as React from "react";

import {
  MuiButton,
  MuiButtonGroup,
  MuiClickAwayListener,
  MuiGrow,
  MuiMenuItem,
  MuiMenuList,
  MuiPaper,
  MuiPopper,
} from "../../library/mui";
import { MuiArrowDropDownIcon } from "../../library/mui/muiIcons";

type Props = { options: { label: string; handleClick: () => void }[] };

export default function SplitButton({ options }: Props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <MuiButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <MuiButton onClick={options[selectedIndex].handleClick}>
          {options[selectedIndex].label}
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
              </MuiClickAwayListener>
            </MuiPaper>
          </MuiGrow>
        )}
      </MuiPopper>
    </>
  );
}
