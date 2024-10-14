import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider"
import { DateTime } from "luxon"
import { useController } from "react-hook-form"

import { useCreateFormContextInputs } from "@/app/add/Form/hooks/use-create-form-context"
import {
    MuiAdapterLuxon,
    MuiDatePicker,
} from "@/modules/components/library/mui"
import { textFieldStyles } from "@/modules/components/ui/form-inputs/TextField/TextField"
import {
    primary,
    primaryLight,
    secondaryLight,
    white,
} from "@/styles/colors/_exports.module.scss"

function DatePicker() {
    const { control } = useCreateFormContextInputs()
    const {
        field: { onChange, value },
    } = useController({ name: "workout.date", control })

    const handleChange = (date: DateTime | null) => {
        if (date !== null) {
            onChange(date.toMillis())
        }
    }

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
                value={DateTime.fromMillis(value)}
                onChange={handleChange}
            />
        </LocalizationProvider>
    )
}

export default DatePicker
