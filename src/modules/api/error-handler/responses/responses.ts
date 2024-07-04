import { ErrorResponse } from "@/modules/model/api/routes/shared/outputs/responseSchema";
import { NextResponse } from "next/server";
import { HTTP_ERROR_CODES, HttpCode } from "../errors/api.error.base";

export class ErrorResponses {
  static respondToClient(
    message: string,
    status: HttpCode,
  ): NextResponse<ErrorResponse> {
    return NextResponse.json({ error: { message } }, { status });
  }

  static respondToClientWithInternalServerError() {
    return this.respondToClient(
      "Internal Server Error",
      HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
    );
  }
}
