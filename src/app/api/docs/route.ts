import buildOas from "@/modules/rest/openapi/openapiBuilder";
import { Responses } from "@/modules/rest/responses/responses";

export async function GET() {
  return Responses.createJSONCreatedResponse(buildOas());
}
