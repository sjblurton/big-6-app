import { type SchemaTypeDefinition } from "sanity"

import exerciseType from "./exercise/type"
import routineType from "./routine/type"

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [exerciseType, routineType],
}
