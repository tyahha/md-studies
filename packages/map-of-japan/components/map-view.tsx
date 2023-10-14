import { JapanRural } from "../logic/scene"
import { JapanMap } from "./japan-map"
import { ChihoMap } from "./chiho-map"
import { HokkaidoTohokuMap } from "./hokkaido-tohoku-map"
import { KantoMap } from "./kanto-map"
import { ChubuMap } from "./chubu-map"
import { KinkiMap } from "./kinki-map"
import { ChugokuShikokuMap } from "./chugoku-shikoku-map"
import { KyusyuMap } from "./kyusyu-map"
import { JapanAreaId } from "../data/japan-area"

export const MapView = ({
  rural,
  onClick,
}: {
  rural: JapanRural
  onClick: (id: JapanAreaId) => void
}) => {
  return (
    <>
      {rural === JapanRural.All && <JapanMap onClick={onClick} />}
      {rural === JapanRural.Chiho && <ChihoMap onClick={onClick} />}
      {rural === JapanRural.HokkaidoTohoku && <HokkaidoTohokuMap onClick={onClick} />}
      {rural === JapanRural.Kanto && <KantoMap onClick={onClick} />}
      {rural === JapanRural.Chubu && <ChubuMap onClick={onClick} />}
      {rural === JapanRural.Kinki && <KinkiMap onClick={onClick} />}
      {rural === JapanRural.ChugokuShikoku && <ChugokuShikokuMap onClick={onClick} />}
      {rural === JapanRural.Kyusyu && <KyusyuMap onClick={onClick} />}
    </>
  )
}
