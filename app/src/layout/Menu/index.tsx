import React from "react"
import Button from "../../components/Button"
import {AiFillHome} from "react-icons/ai"

const Menu = () => {
  return <div className="w-full h-1/6 bg-gray-200">
    <Button text="" handleClick={() => {}}></Button>
    <Button text="Silo 1" handleClick={() => {}}></Button>
    <Button text="Silo 2" handleClick={() => {}}></Button>
    <Button text="Silo 3" handleClick={() => {}}></Button>
    <Button text="Silo 4" handleClick={() => {}}></Button>
    <Button text="Relatórios" handleClick={() => {}}></Button>
    <Button text="Sair" handleClick={() => {}}></Button>
  </div>
}

export default Menu