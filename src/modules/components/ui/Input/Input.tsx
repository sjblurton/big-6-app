import get from "lodash.get"
import { type FieldValues, type Path, useFormContext } from "react-hook-form"

import { MuiTextField } from "../../library/mui/inputs"

type InputProperties<FormData extends FieldValues> = {
    label: string
    isMultiline: boolean
    name: Path<FormData>
    isFullWidth: boolean
}

function Input<FormData extends FieldValues>({
    label,
    isMultiline,
    name,
    isFullWidth,
}: InputProperties<FormData>) {
    const {
        register,
        formState: { errors },
    } = useFormContext<FormData>()

    const errorMessage = get(errors, name)?.message
    return (
        <MuiTextField
            sx={{
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
            }}
            size="small"
            error={Boolean(errorMessage)}
            variant="filled"
            label={label}
            helperText={errorMessage?.toString()}
            multiline={isMultiline}
            fullWidth={isFullWidth}
            {...register(name)}
        />
    )
}

export default Input
