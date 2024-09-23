import { type Metadata } from "next"

const TITLE_PREFIX = "Big 6 Callisthenics | "

export const createMetadata = ({
    description,
    title,
}: {
    title: string
    description: string
}): Metadata => ({
    title: `${TITLE_PREFIX}${title}`,
    description,
})
