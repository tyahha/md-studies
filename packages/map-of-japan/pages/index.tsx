import { useCallback, useRef, useState } from "react"
import { japanArea, JapanArea, JapanAreaId } from "../data/japan-area"
import { playCorrectOrInCorrectSound } from "../data/se"
import { GameMode, getQuestions, Scene } from "../logic/scene"
import { MapGame } from "../components/map-game"
import { AnswerState } from "../logic/answer-state"
import { TitleOverlay } from "../components/overlay/title-overlay"
import { RankingSelectOverlay } from "../components/overlay/ranking-select-overlay"
import { RankingOverlay } from "../components/overlay/ranking-overlay"
import { ResultOverlay } from "../components/overlay/result-overlay"

const timeLimit = 30 * 1000

export default function Index() {
  const [scene, setScene] = useState(Scene.Title)
  const [gameMode, setGameMode] = useState(GameMode.All)
  const [point, setPoint] = useState(0)
  const [answerState, setAnswerState] = useState<undefined | AnswerState>()

  const questions = useRef<JapanArea[]>([])
  const getNextQuestion = (): JapanArea => {
    console.log("current", questions.current)
    if (questions.current.length <= 0) {
      console.log("refresh q")
      questions.current = getQuestions(gameMode)
    }
    const ret = questions.current[0]
    questions.current.shift()
    return ret
  }

  const [question, setCurrentQuestion] = useState<JapanArea | undefined>(undefined)
  const startGame = (gameMode: GameMode) => {
    setAnswerState(undefined)
    setPoint(0)
    setScene(Scene.Gaming)
    setGameMode(gameMode)
    questions.current = getQuestions(gameMode)
    setCurrentQuestion(getNextQuestion())
  }

  const click = useCallback(
    (id: JapanAreaId) => {
      console.log(id)

      const isCorrect = id === question?.id

      playCorrectOrInCorrectSound(isCorrect)

      setPoint((p) => {
        return p + (isCorrect ? 100 : -50)
      })

      const answer = japanArea.get(id)
      if (!answer) {
        throw new Error(`unknown area id=${id}`)
      }

      setAnswerState((c) => {
        return {
          count: c ? c.count + 1 : 1,
          correct: isCorrect,
          answer,
        }
      })
      if (isCorrect) {
        setCurrentQuestion(getNextQuestion())
      }
    },
    [question],
  )

  const showRanking = (rural: GameMode) => {
    setGameMode(rural)
    setScene(Scene.RankingView)
  }

  return (
    <div className={"game-window"}>
      {scene === Scene.Title && <TitleOverlay onStartGame={startGame} onChangeMode={setScene} />}
      {scene === Scene.RankingSelect && (
        <RankingSelectOverlay onSelectRanking={showRanking} onChangeScene={setScene} />
      )}
      {scene === Scene.RankingView && (
        <RankingOverlay
          gameMode={gameMode}
          onChangeScene={(mode) => {
            setScene(mode)
            setGameMode(GameMode.All)
          }}
        />
      )}
      {scene === Scene.Result && (
        <ResultOverlay
          point={point}
          rural={gameMode}
          onRestart={() => {
            startGame(gameMode)
          }}
          onReturnTitle={() => {
            setScene(Scene.Title)
            setGameMode(GameMode.All)
          }}
        />
      )}
      <MapGame
        scene={scene}
        point={point}
        gameMode={gameMode}
        timeLimit={timeLimit}
        question={question}
        answerState={answerState}
        onChangeMode={setScene}
        onChangeRural={setGameMode}
        onClickMap={click}
      />
    </div>
  )
}
