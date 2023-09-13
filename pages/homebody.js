import React from "react";
import Carouselle from "./Components/Carouselle/Carouselle";

function HomeBody() {
  return (
    <div className="homeBody">
      <h1 className="headingh1">Discover featured prompts:</h1>

      <Carouselle title={"Popular"} />
    </div>
  );
}

export default HomeBody;
