import Image from "next/image"
import React from "react"

import { type CmsExerciseIdSchema } from "@/modules/cms/client/exercise/exercise-schemas"
import { urlFor } from "@/modules/cms/client/image"
import RadioButton from "@/modules/components/ui/form-inputs/RadioButton/RadioButton"
import { type CreateWorkoutData } from "@/modules/model/workout/workout-schemas"

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
        <RadioButton<CreateWorkoutData, "type">
            label={
                <Image
                    src={blackAndWhiteImage}
                    {...imageProperties}
                    alt={alt}
                />
            }
            value={_id}
            name="type"
            size="large"
            selectedLabel={
                <Image src={colorImage} {...imageProperties} alt={alt} />
            }
        />
    )
}

export default WorkoutRadioButton
