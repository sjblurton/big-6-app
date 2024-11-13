import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider"
import { DateTime } from "luxon"
import { useController, useFormContext } from "react-hook-form"

import { type CreateWorkoutDataInput } from "@/@types/forms/forms-types"
import { MuiAdapterLuxon, MuiDatePicker } from "@/components/libs/mui"
import {
    primary,
    primaryLight,
    secondaryLight,
    white,
} from "@/styles/colors/_exports.module.scss"

import { textFieldStyles } from "../TextField/TextField"

const name = "workout.date"

function DatePicker() {
    const { control } = useFormContext<CreateWorkoutDataInput>()
    const {
        field: { onChange, value },
    } = useController({ name, control })

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
