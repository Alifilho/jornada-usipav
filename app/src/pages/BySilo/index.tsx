import React, { useState } from "react";

import Info from "../../layout/Info";

import defaultSilos from "../../../sample/silo-data.json"

const BySilo = () => {
  const [silos] = useState(defaultSilos)

  return (
    <div className="container">
    <div className="row">
      <Info id={silos[0].id} temperature={silos[0].temperature} volume={silos[0].volume} weight={silos[0].weight}/>
      <Info id={silos[1].id} temperature={silos[1].temperature} volume={silos[1].volume} weight={silos[1].weight}/>
      <Info id={silos[2].id} temperature={silos[2].temperature} volume={silos[2].volume} weight={silos[2].weight}/>
      <Info id={silos[3].id} temperature={silos[3].temperature} volume={silos[3].volume} weight={silos[3].weight}/>
    </div>
  </div>
  )
}

export default BySilo;