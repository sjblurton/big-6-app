import SwaggerUI from "swagger-ui-react"
import "./swagger-ui.scss"

import { OpenAPIObject } from "openapi3-ts/oas31"

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
