import { testCoverageSchema } from "@/modules/model/test-coverage/testCoverageJsonSchema";
import coverage from "./coverage-summary.json";

const coverageData = testCoverageSchema.parse(coverage);

function Coverage() {
  return (
    <div>{JSON.stringify(coverageData)}</div>
  )
}

export default Coverage