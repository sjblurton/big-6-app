import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function Swagger() {
  return <SwaggerUI url="http://localhost:3000/api/docs/api" />;
}

export default Swagger;
