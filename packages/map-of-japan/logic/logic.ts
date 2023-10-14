import { JapanAreaId } from "../data/japan-area"
import { MouseEventHandler, useCallback } from "react"

export const areaFillColor = "#64ab5b"
export const oceanColor = "#8ea7e6"

export const useAreaClick = (
  onClick?: (id: JapanAreaId) => void,
): MouseEventHandler<SVGPathElement> => {
  return useCallback(
    (e) => {
      const t = e.target as SVGPathElement
      const id: JapanAreaId | undefined = t.id as JapanAreaId

      if (id && onClick) {
        onClick(id)
      }
    },
    [onClick],
  )
}

export type MapProps = { onClick?: (id: JapanAreaId) => void }
