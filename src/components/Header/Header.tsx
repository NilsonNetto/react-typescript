import { HeaderProps } from "../types"
import "./Header.css"

export default function Header ({text}: HeaderProps) {

  return (
    <div className="header">
      <h1>{text}</h1>
    </div>
  )
};