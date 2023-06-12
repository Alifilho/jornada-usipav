import React, { useState } from "react";
import Info from "../../layout/Info";

import siloData from "../../../sample/silo-data.json"

const Home = () => {
  const defaultSilo = siloData.reduce((item, next) => ({
    volume: item.volume += next.volume,
    temperature: item.temperature += next.temperature,
    weight:item.weight += next.weight,
  }), {volume: 0, temperature: 0, weight: 0})
  const [silo] = useState(defaultSilo);

  return (
    <div className="container">
       <div className="row">
      <Info principal id={1} temperature={silo.temperature} volume={silo.volume} weight={silo.weight}/>
      </div>
    </div>
  )
}

export default Home
