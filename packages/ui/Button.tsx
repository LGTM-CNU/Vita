import * as React from "react"

interface Props {
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>
}
