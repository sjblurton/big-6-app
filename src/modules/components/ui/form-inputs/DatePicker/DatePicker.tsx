import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider"
import { useController } from "react-hook-form"

import {
    MuiAdapterLuxon,
    MuiDatePicker,
} from "@/modules/components/library/mui"
import {
    primary,
    primaryLight,
    secondaryLight,
    white,
} from "@/styles/colors/_exports.module.scss"

import { textFieldStyles } from "../TextField/TextField"

function DatePicker() {
    const {
        field: { onChange, value },
    } = useController({ name: "date" })

    return (
        <LocalizationProvider dateAdapter={MuiAdapterLuxon}>
            <MuiDatePicker
                label="Date"
                format="yyyy LLL dd"
                slotProps={{
                    layout: {
                        sx: {
                            color: white,
                            borderColor: primaryLight,
                            backgroundColor: primary,
                            "& .MuiButtonBase-root": {
                                color: white,
                            },
                            "& .MuiTypography-root": {
                                color: white,
                            },
                            "& .MuiDayCalendar-weekDayLabel": {
                                color: secondaryLight,
                            },
                        },
                    },
                    textField: {
                        fullWidth: true,
                        variant: "filled",
                        size: "small",
                        sx: { ...textFieldStyles },
                    },
                }}
                value={value}
                onChange={onChange}
            />
        </LocalizationProvider>
    )
}

export default DatePicker
