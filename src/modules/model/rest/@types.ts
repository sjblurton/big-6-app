import { z } from "zod";
import { badRequestBodySchema } from "./openapiSchema";

export type BadRequestBody = z.infer<typeof badRequestBodySchema>;
