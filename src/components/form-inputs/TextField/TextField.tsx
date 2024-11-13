import get from "lodash.get"
import { type FieldValues, type Path, useFormContext } from "react-hook-form"

import { MuiMenuItem, MuiTextField } from "@/components/libs/mui"

type InputProperties<FormData extends FieldValues> = {
    label: string
    name: Path<FormData>
    isMultiline?: boolean
    isFullWidth?: boolean
    isNumber?: boolean
    isSelect?: boolean
    options?: { label: string; value: string | number }[]
    defaultValue?: unknown
}

export const textFieldStyles = {
    "& .MuiFormLabel-root": {
        color: "white",
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: "white",
    },
    "& .MuiFilledInput-root::before": {
        borderBottom: "1px solid white",
    },
    "& .MuiFormHelperText-root.Mui-error": {
        backgroundColor: "error.light",
        color: "white",
        borderRadius: 1,
        paddingInline: 2,
    },

    "& .MuiSvgIcon-root": { color: "white" },
}

function TextField<FormData extends FieldValues>({
    label,
    name,
    isMultiline = false,
    isFullWidth = false,
    isNumber = false,
    isSelect = false,
    options,
    defaultValue,
}: InputProperties<FormData>) {
    const {
        register,
        formState: { errors },
    } = useFormContext<FormData>()

    if (isSelect && !options) {
        throw new Error("options are required when isSelect is true")
    }

    const errorMessage = get(errors, name)?.message
    return (
        <MuiTextField
            sx={textFieldStyles}
            size="small"
            error={Boolean(errorMessage)}
            variant="filled"
            label={label}
            helperText={errorMessage?.toString()}
            multiline={isMultiline}
            fullWidth={isFullWidth}
            select={isSelect}
            type={isNumber ? "number" : "text"}
            defaultValue={defaultValue}
            {...register(name, { valueAsNumber: isNumber })}
        >
            {isSelect &&
                options &&
                options.map((option) => (
                    <MuiMenuItem
                        sx={{ color: "black" }}
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </MuiMenuItem>
                ))}
        </MuiTextField>
    )
}

export default TextField
