import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function Swagger() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100%",
        paddingBlock: "1em",
      }}
    >
      <SwaggerUI url="http://localhost:3000/api/v1/docs/swagger" />;
    </div>
  );
}

export default Swagger;
