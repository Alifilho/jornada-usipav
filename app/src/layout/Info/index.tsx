import React from "react";
import { LuWarehouse } from "react-icons/lu";

interface InfoProps {
  id: number;
  temperature: number;
  volume: number;
  weight: number;
  principal: boolean
}

const Info = ({ id, temperature, volume, weight, principal }: InfoProps) => {
  return (
    <div className="d-flex flex-column col-md-6 border g-4 g-lg-4 border-dark-subtle shadow-sm">
      <h1>Silo {principal ? "Principal" : id}</h1>
      <LuWarehouse fontSize="32px"/>
      <p>Temperatura: {temperature} ºC</p>
      <p>Volume: {volume}%</p>
      <p>Peso Líquido: {weight} KG</p>
    </div>
  )
}

export default Info;