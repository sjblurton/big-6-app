import React from "react"
import {
    type FieldPath,
    type FieldValues,
    useFormContext,
    useWatch,
} from "react-hook-form"

import * as backgroundClasses from "@/styles/utilityClasses/background.module.scss"
import * as borderClasses from "@/styles/utilityClasses/border-radius.module.scss"
import * as boxShadows from "@/styles/utilityClasses/box-shadow.module.scss"
import * as flexClasses from "@/styles/utilityClasses/flex.module.scss"

import styles from "./RadioButton.module.scss"

type RadioButtonProperties<
    TFieldValues extends FieldValues,
    TFieldName extends FieldPath<TFieldValues>,
> = {
    name: TFieldName
    label: React.ReactNode
    selectedLabel?: React.ReactNode
    value: TFieldValues[TFieldName]
    size?: "small" | "large"
}

function RadioButton<
    TFieldValues extends FieldValues,
    TFieldName extends FieldPath<TFieldValues>,
>({
    name,
    label,
    value,
    selectedLabel = label,
    size = "large",
}: RadioButtonProperties<TFieldValues, TFieldName>) {
    const { register, control } = useFormContext<TFieldValues>()
    const watchedValue = useWatch<TFieldValues>({
        control,
        name,
    })

    const isChecked = watchedValue === value

    const currentLabel = isChecked ? selectedLabel : label

    const wrapperClasses = [
        backgroundClasses.light,
        borderClasses.round,
        flexClasses.center,
        isChecked ? boxShadows.light : boxShadows.subtle,
        styles.wrapper,
        size === "small" ? styles.small : styles.large,
    ].join(" ")

    const labelClasses = [
        isChecked ? styles.scale : "",
        flexClasses.center,
        borderClasses.round,
    ].join(" ")

    return (
        <div className={wrapperClasses}>
            <input
                type="radio"
                {...register(name)}
                id={`field-${value}`}
                value={value}
            />
            <label className={labelClasses} htmlFor={`field-${value}`}>
                {currentLabel}
            </label>
        </div>
    )
}

export default RadioButton
