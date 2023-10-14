import { isRankIn } from "../../logic/ranking"
import { RankSaver } from "../rank-saver"
import { GameMode } from "../../logic/scene"
import { Overlay } from "./overlay"

export const ResultOverlay = ({
  point,
  rural,
  onRestart,
  onReturnTitle,
}: {
  point: number
  rural: GameMode
  onRestart: () => void
  onReturnTitle: () => void
}) => {
  return (
    <Overlay>
      <p className={"title"}>今回の得点</p>
      <p className={"result-point"}>{`${point} 点`}</p>
      <p className={"title"}>{isRankIn(rural, point) ? "ランクイン" : "ランク外"}</p>
      {isRankIn(rural, point) && <RankSaver rural={rural} point={point} />}
      <button onClick={onRestart}>もう１回遊ぶ</button>
      <button onClick={onReturnTitle}>タイトルに戻る</button>
    </Overlay>
  )
}
