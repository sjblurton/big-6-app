import { extendApi, generateSchema } from "@anatine/zod-openapi"
import { type ResponsesObject } from "openapi3-ts/oas31"
import { errorResponseBodySchema } from "./outputs/response-schema"

export const errorResponseOpenApiSchema = generateSchema(
    extendApi(errorResponseBodySchema)
)

export const commonOpenApiErrorResponses: ResponsesObject = {
    403: {
        description: "Forbidden",
        content: {
            "application/json": {
                schema: errorResponseOpenApiSchema,
            },
        },
    },
    404: {
        description: "Not Found",
        content: {
            "application/json": {
                schema: errorResponseOpenApiSchema,
            },
        },
    },
    500: {
        description: "Internal Server Error",
        content: {
            "application/json": {
                schema: errorResponseOpenApiSchema,
            },
        },
    },
}
