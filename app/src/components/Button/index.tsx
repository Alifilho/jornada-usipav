import React from "react"
import { IconType } from "react-icons/lib"

interface ButtonProps {
  handleClick: () => void
  text: string
  icon?: IconType
}

const Button = ({handleClick, text, icon: Icon}: ButtonProps) => {
  return <button onClick={handleClick} className="p-2 bg-gray-600 rounded-lg">{Icon ? <Icon /> : text}</button>
}

export default Button