import * as React from "react"

interface Props {
  children: React.ReactNode
  onClick: () => void
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}
