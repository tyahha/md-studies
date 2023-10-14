import { GameMode, Scene } from "../logic/scene"
import { AnswerState } from "../logic/answer-state"
import { CountDownTimer } from "./count-down-timer"
import { FadeOut } from "./fade-out"
import classNames from "classnames"

export const GameControl = ({
  point,
  timeLimit,
  question,
  answerState,
  onChangeMode,
  onChangeRural,
}: {
  point: number
  timeLimit: number
  question: string
  answerState: undefined | AnswerState
  onChangeMode: (mode: Scene) => void
  onChangeRural: (rural: GameMode) => void
}) => {
  const answer = answerState?.answer
  const isCorrect = answerState?.correct
  return (
    <div className={"game-state"}>
      <CountDownTimer
        time={timeLimit}
        timeUp={() => {
          onChangeMode(Scene.Result)
        }}
      />
      <p className={"point"}>{`点数：${point} 点`}</p>
      <p className={"prefecture-question"}>問題：{question}</p>
      <p>
        <button
          onClick={() => {
            onChangeMode(Scene.Title)
            onChangeRural(GameMode.All)
          }}
        >
          中止
        </button>
        {answerState && (
          <FadeOut time={500} show={!!answer}>
            <span
              className={classNames("correct-or-incorrect", {
                correct: isCorrect === true,
                incorrect: isCorrect === false,
              })}
            >
              {isCorrect ? "○" : "×"}
              {answer ? answer.name : ""}
            </span>
            <span style={{ display: "none" }}>{answerState?.count}</span>
          </FadeOut>
        )}
      </p>
    </div>
  )
}
