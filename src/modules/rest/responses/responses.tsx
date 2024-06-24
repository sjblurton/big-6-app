import {ZodError} from "zod";
import {badRequestBodySchema} from "../../model/rest/openapiSchema";
import {BadRequestBody} from "../../model/rest/@types";

export class Responses {
  private static defaultHeaders: HeadersInit = {};

  static configure = ({defaultHeaders}: {defaultHeaders: HeadersInit}) => {
    Responses.defaultHeaders = defaultHeaders;
  };

  private static createResponse = (
    message: string | null | BodyInit,
    config: ResponseInit = {}
  ): Response =>
    new Response(message, {
      ...config,
      headers: {...config.headers, ...Responses.defaultHeaders},
    });

  static createTextResponse = (text: string, config: ResponseInit = {}) =>
    Responses.createResponse(text, {
      ...config,
      headers: {...config.headers, "content-type": "text/plain"},
    });

  static createJSONResponse = (object: unknown, config: ResponseInit = {}) =>
    Responses.createResponse(JSON.stringify(object), {
      ...config,
      headers: {...config.headers, "content-type": "application/json"},
    });

  static createJSONCreatedResponse = (
    object: unknown,
    config: ResponseInit = {}
  ) =>
    Responses.createJSONResponse(object, {
      ...config,
      status: 201,
    });

  static createJSONBadRequestResponse = (
    object: BadRequestBody,
    config: ResponseInit = {status: 400}
  ): Response =>
    Responses.createJSONResponse(badRequestBodySchema.parse(object), config);

  static createBadRequestResponseFromZodError = (error: ZodError) =>
    Responses.createJSONBadRequestResponse(error.issues);

  static createUnauthorizedResponse = () =>
    Responses.createResponse("Unauthorized", {
      status: 401,
    });

  static createForbiddenResponse = () =>
    Responses.createResponse("Forbidden", {
      status: 403,
    });

  static createNotFoundResponse = (err?: string) =>
    Responses.createResponse(`Not Found${err ? ` - ${err}` : ""}`, {
      status: 404,
    });

  static createInternalServerErrorResponse = (err: string) =>
    Responses.createResponse(`Internal Server Error - ${err}`, {
      status: 500,
    });
}
