import { useEffect, useRef, useState, FC, ReactNode } from "react"

export const FadeOut: FC<{
  time: number
  show: boolean
  children: ReactNode
}> = ({ show, time, children }) => {
  const [isShow, setShow] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => {
    if (show) {
      setShow(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setShow(false)
      }, time)
    }
  }, [show, time, children])

  return isShow ? <>{children}</> : <></>
}
