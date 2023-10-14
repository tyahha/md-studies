import { GameMode, Scene } from "../../logic/scene"
import { RankingContent } from "../ranking-content"
import { Overlay } from "./overlay"

export const RankingOverlay = ({
  gameMode,
  onChangeScene,
}: {
  gameMode: GameMode
  onChangeScene: (scene: Scene) => void
}) => {
  return (
    <Overlay>
      <RankingContent gameMode={gameMode} />
      <button
        onClick={() => {
          onChangeScene(Scene.RankingSelect)
        }}
      >
        戻る
      </button>
      <button
        onClick={() => {
          onChangeScene(Scene.Title)
        }}
      >
        タイトルに戻る
      </button>
    </Overlay>
  )
}
