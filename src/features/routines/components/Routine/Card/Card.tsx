import Image from "next/image"

import { MuiGrid, MuiTypography } from "@/components/libs/mui"
import { type RoutineDay } from "@/features/routines/schemas/routine-schemas"
import * as background from "@/styles/utility-classes/background.module.scss"
import * as boxShadow from "@/styles/utility-classes/box-shadow.module.scss"
import { urlFor } from "@/utils/cms/image"
import { toCapitalizedWords } from "@/utils/strings/transform"

import { wrapper } from "./Card.module.scss"

function Card({ day }: { day: RoutineDay }) {
    return (
        <MuiGrid
            container
            marginBlock={1}
            marginInline="auto"
            justifyContent="space-between"
            alignItems="center"
            className={`${wrapper} ${background.light} ${boxShadow.subtle}`}
        >
            <MuiGrid item>
                <MuiTypography variant="h5" component="h2">
                    {toCapitalizedWords(day.name)}
                </MuiTypography>
            </MuiGrid>
            <MuiGrid item>
                {day.exercises.map(({ image, _id, name }) => {
                    const height = _id === "rest" ? 40 : 80
                    return (
                        <Image
                            key={_id}
                            src={urlFor(image).width(80).height(height).url()}
                            width={80}
                            height={height}
                            alt={`Art work of a person doing a hard level of the exercise ${name}`}
                        />
                    )
                })}
            </MuiGrid>
        </MuiGrid>
    )
}

export default Card
