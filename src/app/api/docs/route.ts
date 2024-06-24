import buildOas from "@/modules/model/rest/openapiBuilder";
import {Responses} from "@/modules/rest/responses/responses";

export async function GET() {
  return Responses.createJSONCreatedResponse(buildOas());
}
