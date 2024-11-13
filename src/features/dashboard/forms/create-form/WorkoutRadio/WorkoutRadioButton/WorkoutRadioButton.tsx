import Image from "next/image"
import React from "react"

import { type CmsExerciseIdSchema } from "@/@types/cms/cms-types"
import { type CreateWorkoutDataInput } from "@/@types/forms/forms-types"
import RadioButton from "@/components/form-inputs/RadioButton/RadioButton"
import { urlFor } from "@/utils/cms/image"

const size = 80

function WorkoutRadioButton({ _id, image, name }: CmsExerciseIdSchema) {
    const blackAndWhiteImage = urlFor(image)
        .width(size)
        .height(size)
        .saturation(-100)
        .url()

    const colorImage = urlFor(image).width(size).height(size).url()

    const alt = `person practicing the ${name} exercise.`.toLowerCase()

    const imageProperties = {
        placeholder: "blur",
        blurDataURL: image.lqip,
        width: size,
        height: size,
    } as const

    return (
        <RadioButton<CreateWorkoutDataInput, "workout.type">
            label={
                <Image
                    src={blackAndWhiteImage}
                    {...imageProperties}
                    alt={alt}
                />
            }
            value={_id}
            name="workout.type"
            size="large"
            selectedLabel={
                <Image src={colorImage} {...imageProperties} alt={alt} />
            }
        />
    )
}

export default WorkoutRadioButton
