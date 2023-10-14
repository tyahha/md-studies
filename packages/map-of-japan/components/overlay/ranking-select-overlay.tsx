import { GameMode, getGameModeText, Scene } from "../../logic/scene"
import { Overlay } from "./overlay"

export const RankingSelectOverlay = ({
  onSelectRanking,
  onChangeScene,
}: {
  onSelectRanking: (rural: GameMode) => void
  onChangeScene: (scene: Scene) => void
}) => {
  return (
    <Overlay>
      <p className={"title"}>ランキング選択</p>
      <p>
        <button onClick={() => onSelectRanking(GameMode.All)}>
          {getGameModeText(GameMode.All)}
        </button>
        <button onClick={() => onSelectRanking(GameMode.Chiho)}>
          {getGameModeText(GameMode.Chiho)}
        </button>
      </p>
      <p>
        <button onClick={() => onSelectRanking(GameMode.HokkaidoTohoku)}>
          {getGameModeText(GameMode.HokkaidoTohoku)}
        </button>
        <button onClick={() => onSelectRanking(GameMode.Kanto)}>
          {getGameModeText(GameMode.Kanto)}
        </button>
        <button onClick={() => onSelectRanking(GameMode.Chubu)}>
          {getGameModeText(GameMode.Chubu)}
        </button>
      </p>
      <p>
        <button onClick={() => onSelectRanking(GameMode.Kinki)}>
          {getGameModeText(GameMode.Kinki)}
        </button>
        <button onClick={() => onSelectRanking(GameMode.ChugokuShikoku)}>
          {getGameModeText(GameMode.ChugokuShikoku)}
        </button>
        <button onClick={() => onSelectRanking(GameMode.Kyusyu)}>
          {getGameModeText(GameMode.Kyusyu)}
        </button>
      </p>
      <p>
        <button onClick={() => onSelectRanking(GameMode.PrefectureToCapital)}>
          {getGameModeText(GameMode.PrefectureToCapital)}
        </button>
        <button onClick={() => onSelectRanking(GameMode.CaptalToPrefecture)}>
          {getGameModeText(GameMode.CaptalToPrefecture)}
        </button>
      </p>
      <p>
        <button onClick={() => onChangeScene(Scene.Title)}>戻る</button>
      </p>
    </Overlay>
  )
}
