import React, { ReactNode } from "react"

export const Overlay: React.FC<{
  children: ReactNode
}> = (props) => {
  return (
    <>
      <div className={"overlay"} />
      <div className={"overlay-content"}>{props.children}</div>
    </>
  )
}
