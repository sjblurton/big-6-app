import { type OpenAPIObject } from "openapi3-ts/oas31"
import SwaggerUI from "swagger-ui-react"

import "./swagger-ui.scss"

function Swagger({ json }: { json: OpenAPIObject }) {
    return (
        <div
            style={{
                backgroundColor: "white",
                width: "100vw",
                height: "100%",
                paddingBlock: "1em",
            }}
        >
            <SwaggerUI spec={json} />;
        </div>
    )
}

export default Swagger
