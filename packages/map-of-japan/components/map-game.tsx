import { GameMode, getGameModeRural, getQuestions, Scene } from "../logic/scene"
import { JapanArea, JapanAreaId } from "../data/japan-area"
import { AnswerState } from "../logic/answer-state"
import { GameControl } from "./game-control"
import { MapView } from "./map-view"
import { Overlay } from "./overlay/overlay"
import { useMemo } from "react"

export const MapGame = ({
  scene,
  point,
  gameMode,
  timeLimit,
  question,
  answerState,
  onChangeMode,
  onChangeRural,
  onClickMap,
}: {
  scene: Scene
  point: number
  gameMode: GameMode
  timeLimit: number
  question: undefined | JapanArea
  answerState: undefined | AnswerState
  onChangeMode: (mode: Scene) => void
  onChangeRural: (rural: GameMode) => void
  onClickMap: (id: JapanAreaId) => void
}) => {
  const buttonsToAnswer = useMemo(() => {
    return getQuestions(gameMode).map((a) => {
      return (
        <button onClick={() => onClickMap(a.id)} key={a.id}>
          {gameMode === GameMode.CaptalToPrefecture ? a.name : a.capitalName}
        </button>
      )
    })
  }, [onClickMap, gameMode])

  const rural = useMemo(() => getGameModeRural(gameMode), [gameMode])

  return scene === Scene.Gaming &&
    (gameMode === GameMode.PrefectureToCapital ||
      gameMode === GameMode.CaptalToPrefecture) ? (
    <div className={"map-container"}>
      <Overlay>
        <GameControl
          point={point}
          timeLimit={timeLimit}
          question={
            question
              ? gameMode === GameMode.PrefectureToCapital
                ? question.name
                : question.capitalName
              : ""
          }
          answerState={answerState}
          onChangeMode={onChangeMode}
          onChangeRural={onChangeRural}
        />
        <div className={"map-name-buttons"}>{buttonsToAnswer}</div>
      </Overlay>
      <MapView rural={rural} onClick={onClickMap} />
    </div>
  ) : (
    <div className={"map-container"}>
      {scene === Scene.Gaming && (
        <GameControl
          point={point}
          timeLimit={timeLimit}
          question={question?.name ?? ""}
          answerState={answerState}
          onChangeMode={onChangeMode}
          onChangeRural={onChangeRural}
        />
      )}
      <MapView rural={rural} onClick={onClickMap} />
    </div>
  )
}
