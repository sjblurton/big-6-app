import get from "lodash.get"
import { type FieldValues, type Path, useFormContext } from "react-hook-form"

import { MuiTextField } from "../../../library/mui/inputs"

type InputProperties<FormData extends FieldValues> = {
    label: string
    name: Path<FormData>
    isMultiline?: boolean
    isFullWidth?: boolean
    isNumber?: boolean
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
}

function TextField<FormData extends FieldValues>({
    label,
    name,
    isMultiline = false,
    isFullWidth = false,
    isNumber = false,
}: InputProperties<FormData>) {
    const {
        register,
        formState: { errors },
    } = useFormContext<FormData>()

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
            type={isNumber ? "number" : "text"}
            {...register(name, { valueAsNumber: isNumber })}
        />
    )
}

export default TextField
