import { GameMode, getGameModeText, Scene } from "../../logic/scene"
import { Overlay } from "./overlay"

export const TitleOverlay = ({
  onStartGame,
  onChangeMode,
}: {
  onStartGame: (rural: GameMode) => void
  onChangeMode: (mode: Scene) => void
}) => {
  return (
    <Overlay>
      <p className={"title"}>日本地図ゲーム</p>
      <p>
        <button onClick={() => onStartGame(GameMode.All)}>{getGameModeText(GameMode.All)}</button>
        <button onClick={() => onStartGame(GameMode.Chiho)}>
          {getGameModeText(GameMode.Chiho)}
        </button>
      </p>
      <p>
        <button onClick={() => onStartGame(GameMode.HokkaidoTohoku)}>
          {getGameModeText(GameMode.HokkaidoTohoku)}
        </button>
        <button onClick={() => onStartGame(GameMode.Kanto)}>
          {getGameModeText(GameMode.Kanto)}
        </button>
        <button onClick={() => onStartGame(GameMode.Chubu)}>
          {getGameModeText(GameMode.Chubu)}
        </button>
      </p>
      <p>
        <button onClick={() => onStartGame(GameMode.Kinki)}>
          {getGameModeText(GameMode.Kinki)}
        </button>
        <button onClick={() => onStartGame(GameMode.ChugokuShikoku)}>
          {getGameModeText(GameMode.ChugokuShikoku)}
        </button>
        <button onClick={() => onStartGame(GameMode.Kyusyu)}>
          {getGameModeText(GameMode.Kyusyu)}
        </button>
      </p>
      <p>
        <button onClick={() => onStartGame(GameMode.PrefectureToCapital)}>
          {getGameModeText(GameMode.PrefectureToCapital)}
        </button>
        <button onClick={() => onStartGame(GameMode.CaptalToPrefecture)}>
          {getGameModeText(GameMode.CaptalToPrefecture)}
        </button>
      </p>
      <p>
        <button onClick={() => onChangeMode(Scene.RankingSelect)}>ランキング見る</button>
      </p>
    </Overlay>
  )
}
