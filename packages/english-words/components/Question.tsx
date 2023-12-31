import { useEffect, useMemo, useState } from "react"
import {
  getTodayStudyCountByType,
  saveHistory,
  saveHistoryAtReview,
} from "@/logics/history"
import { useAppContext } from "@/context"
import { Histories } from "@/components/Histories"
import { DrawArea } from "common/components/DrawArea"
import { WordDataType } from "@/data/wordsData"

type Props = {
  data: WordDataType
  onPrev: () => void
  onNext: () => void
  onReturnTitle: () => void
}
export const Question = ({ data, onPrev, onNext, onReturnTitle }: Props) => {
  const { mode, questionType } = useAppContext()

  const [status, setStatus] = useState<"thinking" | "result">("thinking")

  const [todayStudyCount, setTodayStudyCount] = useState(
    getTodayStudyCountByType(questionType),
  )
  useEffect(() => {
    setTodayStudyCount(getTodayStudyCountByType(questionType))
  }, [questionType, data])

  const saveResult = (isCollect: boolean) => {
    if (mode === "review") {
      saveHistoryAtReview(questionType, data, isCollect)
    } else {
      saveHistory(questionType, data, isCollect)
    }
    setStatus("thinking")
    onNext()
  }

  const { questions } = useAppContext()
  const index = useMemo(
    () => questions.findIndex((q) => q.id === data.id),
    [data, questions],
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (status === "thinking") {
          if (e.shiftKey) {
            onPrev()
          } else {
            setStatus("result")
          }
        } else {
          if (e.shiftKey) {
            setStatus("thinking")
          } else {
            setStatus("thinking")
            onNext()
          }
        }
      }
    }
    window.addEventListener("keydown", handler)

    return () => {
      window.removeEventListener("keydown", handler)
    }
  }, [status, onPrev, onNext])

  return (
    <main className={`flex justify-center`}>
      <section className="w-11/12 text-center">
        <div className="mt-4 flex gap-8 justify-center">
          <button
            className="link-btn"
            onClick={() => {
              setStatus("thinking")
              onPrev()
            }}
          >
            ＜＜＜前に戻る
          </button>
          <button className="link-btn" onClick={onReturnTitle}>
            タイトルに戻る
          </button>
          <button
            className="link-btn"
            onClick={() => {
              setStatus("thinking")
              onNext()
            }}
          >
            次に進む＞＞＞
          </button>
        </div>
        <p className="text-xl text-center mt-4">
          今日勉強した数：{todayStudyCount}
        </p>
        <h2 className="text-center text-6xl my-4">
          問題{data.id}({index + 1}/{questions.length})
        </h2>
        <div className="mt-4">
          <div className="flex gap-4 justify-center mt-4">
            <button
              disabled={status !== "result"}
              className={`btn green w-1/2 text-4xl`}
              onClick={() => saveResult(true)}
            >
              ◎あたった
            </button>
            <button
              disabled={status !== "result"}
              className={`btn red w-1/2 text-4xl rounded`}
              onClick={() => saveResult(false)}
            >
              ✖はずれた
            </button>
          </div>
          <button
            className={`btn blue text-4xl w-1/2 mt-4`}
            onClick={() => setStatus("result")}
            disabled={status !== "thinking"}
          >
            答えを見る
          </button>
        </div>
        <button
          className="mt-8 px-8 py-4 rounded bg-gray-300 text-red-700 text-4xl"
          onClick={() => {
            const c = new SpeechSynthesisUtterance(data.english)
            c.lang = "en-US"
            speechSynthesis.speak(c)
          }}
        >
          英語の発音
        </button>
        <div className={`bg-gray-100 text-center py-2 my-4 relative`}>
          <p
            className={`text-4xl  ${questionType === "J2E" && "text-red-600"}`}
          >
            {questionType !== "E2J" && status === "thinking"
              ? "\u200b"
              : data.english}
          </p>
          <p
            className={`text-4xl mt-2 ${
              questionType === "E2J" && "text-red-600"
            }`}
          >
            {questionType !== "J2E" && status === "thinking"
              ? "\u200b"
              : data.japanese}
          </p>
        </div>
        <div className="flex justify-center mt-2 bg-white">
          <DrawArea height={300} />
        </div>
        <div className="relative overflow-x-auto shadow-md mt-8 w-fit m-auto min-w-8">
          <Histories data={data} />
        </div>
      </section>
    </main>
  )
}
