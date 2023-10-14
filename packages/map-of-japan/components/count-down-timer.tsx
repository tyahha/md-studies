import { useEffect, useRef, useState } from "react"

export const CountDownTimer = ({
  time,
  timeUp,
}: {
  time: number
  timeUp: () => void
}) => {
  const [prevTime, setPrevTime] = useState(new Date().getTime())
  const [rest, setReset] = useState(time)
  const timer = useRef(0)

  const timeoutFunc = () => {
    const now = new Date().getTime()
    const r = Math.max(rest - (now - prevTime), 0)
    setPrevTime(now)
    setReset(r)
    if (r > 0) {
      timer.current = window.setTimeout(timeoutFunc, 100)
    } else {
      timeUp()
    }
  }

  useEffect(() => {
    timer.current = window.setTimeout(timeoutFunc, 100)
    return () => {
      if (timer.current) {
        window.clearTimeout(timer.current)
      }
    }
  }, [timeoutFunc, time])

  return <p className={"timer"}>{`残り時間：${rest / 1000} 秒`}</p>
}
