import { type SchemaTypeDefinition } from "sanity"

import exerciseType from "./exercise/type"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [exerciseType],
}
