import ErrorHandler from "@/modules/api/error-handler/ErrorHandler";
import buildOas from "@/modules/model/api/openapiBuilder";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(buildOas());
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle();
    return errorResponse;
  }
}
