import buildOas from "@/modules/model/api/openapiBuilder";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(buildOas());
}
