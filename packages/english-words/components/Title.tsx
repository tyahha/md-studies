import { useAppContext } from "@/context"
import { useEffect, useMemo, useState } from "react"
import {
  getTodayStudyCount,
  loadHistoriesByType,
  loadLastAnsweredId,
} from "@/logics/history"
import dayjs from "dayjs"
import {
  defaultAppSettings,
  loadSettings,
  saveSettings,
} from "@/logics/settings"
import { QuestionType, WordDataType, WordsData } from "@/data/wordsData"

const pickWrongs = (day: dayjs.Dayjs, questionType: QuestionType) => {
  const histories = loadHistoriesByType(questionType)
  const ret: WordDataType[] = []
  const baseDay = day.format("YYYYMMDD")
  Object.entries(histories).forEach(([id, history]) => {
    const kanji = WordsData.find((k) => k.id === id)
    if (
      kanji &&
      history.find(
        (h) => !h.isCorrect && dayjs(h.datetime).format("YYYYMMDD") === baseDay,
      )
    ) {
      ret.push(kanji)
    }
  })
  return ret
}

const pickRecentWrongs = (day: dayjs.Dayjs, questionType: QuestionType) => {
  const histories = loadHistoriesByType(questionType)
  const ret: WordDataType[] = []
  const baseDay = day.format("YYYYMMDD")
  Object.entries(histories).forEach(([id, history]) => {
    const kanji = WordsData.find((k) => k.id === id)
    if (
      kanji &&
      history.length > 0 &&
      !history[history.length - 1].isCorrect &&
      baseDay === dayjs(history[history.length - 1].datetime).format("YYYYMMDD")
    ) {
      ret.push(kanji)
    }
  })
  return ret
}

const pickNoStudy = (questionType: QuestionType) => {
  const histories = loadHistoriesByType(questionType)
  const ids = Object.keys(histories)
  return WordsData.filter((d) => !ids.includes(d.id))
}

export const TitleView = () => {
  const { setMode, setQuestions, setIndex, questionType, setQuestionType } =
    useAppContext()

  const [{ isOnlyWrongs, enableWrongsCount }, setSettings] =
    useState(defaultAppSettings)
  useEffect(() => {
    setSettings(loadSettings())
  }, [])
  const setIsOnlyWrongs = (v: boolean) => {
    setSettings((s) => {
      const n = {
        ...s,
        isOnlyWrongs: v,
      }
      saveSettings(n)
      return n
    })
  }
  const setEnabledWrongsCount = (v: number) => {
    setSettings((s) => {
      const n = {
        ...s,
        enableWrongsCount: v,
      }
      saveSettings(n)
      return n
    })
  }
  const [
    {
      indexForContinue,
      recentWrongs,
      todayWrongs,
      yesterdayWrongs,
      noStudies,
      twoDaysAgoWrongs,
      todayStudyCount,
    },
    setState,
  ] = useState<{
    indexForContinue: number
    recentWrongs: WordDataType[]
    todayWrongs: WordDataType[]
    yesterdayWrongs: WordDataType[]
    noStudies: WordDataType[]
    twoDaysAgoWrongs: WordDataType[]
    todayStudyCount: Record<QuestionType, number>
  }>({
    indexForContinue: 0,
    recentWrongs: [],
    todayWrongs: [],
    noStudies: [],
    yesterdayWrongs: [],
    twoDaysAgoWrongs: [],
    todayStudyCount: {
      J2E: 0,
      E2J: 0,
      listening: 0,
    },
  })
  useEffect(() => {
    const id = loadLastAnsweredId(questionType) || WordsData[0].id
    const foundIndex = WordsData.findIndex((k) => k.id === id)
    const continueIndex = foundIndex == null ? 0 : foundIndex + 1
    setState({
      indexForContinue: WordsData.length <= continueIndex ? 0 : continueIndex,
      recentWrongs: pickRecentWrongs(dayjs(), questionType),
      todayWrongs: pickWrongs(dayjs(), questionType),
      noStudies: pickNoStudy(questionType),
      yesterdayWrongs: pickWrongs(dayjs().subtract(1, "day"), questionType),
      twoDaysAgoWrongs: pickWrongs(dayjs().subtract(2, "day"), questionType),
      todayStudyCount: getTodayStudyCount(),
    })
  }, [questionType])
  const filteredWordsData = useMemo(() => {
    if (!isOnlyWrongs) return WordsData

    return WordsData.filter((k) => {
      const history = loadHistoriesByType(questionType)
      const h = history[k.id]
      if (!h) return false

      return h.filter((e) => !e.isCorrect).length >= enableWrongsCount
    })
  }, [questionType, isOnlyWrongs, enableWrongsCount])
  const [questionNumber, setQuestionNumber] = useState(1)

  return (
    <main className="pt-16">
      <h1 className="text-9xl text-center">英語の勉強</h1>
      <div className="flex justify-center gap-4 text-4xl mt-4">
        <div className={`${questionType === "J2E" && "underline"}`}>
          <input
            id="J2E"
            type="radio"
            onChange={() => setQuestionType("J2E")}
            checked={questionType === "J2E"}
            className={"w-8 h-8 relative top-1"}
          />
          <label htmlFor="J2E">日本語⇒英語</label>
        </div>
        <div className={`${questionType === "E2J" && "underline"}`}>
          <input
            id="E2J"
            type="radio"
            onChange={() => setQuestionType("E2J")}
            checked={questionType === "E2J"}
            className={"w-8 h-8 relative top-1"}
          />
          <label htmlFor="E2J">英語⇒日本語</label>
        </div>
        <div className={`${questionType === "listening" && "underline"}`}>
          <input
            id="listening"
            type="radio"
            onChange={() => setQuestionType("listening")}
            checked={questionType === "listening"}
            className={"w-8 h-8 relative top-1"}
          />
          <label htmlFor="listening">リスニング</label>
        </div>
      </div>
      <h2 className="text-center mt-12 text-4xl">毎日の学習</h2>
      <h2 className={"text-center text-3xl mt-3"}>本日勉強した数</h2>
      <div className={"text-center text-2xl gap-8 mt-2"}>
        <h3>日本語⇒英語：{todayStudyCount.J2E}</h3>
        <h3>英語⇒日本語：{todayStudyCount.E2J}</h3>
        <h3>英語⇒日本語：{todayStudyCount.listening}</h3>
      </div>
      <div className="text-center mt-4 text-xl">
        <span className="p-2 bg-blue-300">
          <input
            className="mr-2 h-8 w-8 relative top-2"
            id="isOnlyWrongs"
            type="checkbox"
            checked={isOnlyWrongs}
            onChange={(e) => setIsOnlyWrongs(e.target.checked)}
          />
          <select
            value={enableWrongsCount}
            onChange={(e) => setEnabledWrongsCount(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <label htmlFor="isOnlyWrongs">回以上間違えたところだけ</label>
        </span>
      </div>
      <div className="flex justify-center gap-1 mt-4">
        <button
          onClick={() => {
            setQuestions(filteredWordsData)
            setIndex(0)
            setMode("question")
          }}
          disabled={filteredWordsData.length <= 0}
          className={`bg-blue-500 text-white font-bold py-4 rounded text-2xl w-1/6 ${
            filteredWordsData.length <= 0 ? "opacity-50" : "hover:bg-blue-700"
          }`}
        >
          初めから
        </button>
        <button
          onClick={() => {
            setQuestions(filteredWordsData)
            setIndex(indexForContinue)
            setMode("question")
          }}
          disabled={
            indexForContinue === 0 ||
            isOnlyWrongs ||
            filteredWordsData.length <= 0
          }
          className={`bg-green-500 text-white font-bold py-4 rounded text-2xl w-1/6 ${
            indexForContinue === 0 ||
            isOnlyWrongs ||
            filteredWordsData.length <= 0
              ? "opacity-50"
              : "hover:bg-green-700"
          }`}
        >
          続きから
        </button>
        <button
          onClick={() => {
            setQuestions(noStudies)
            setIndex(0)
            setMode("question")
          }}
          disabled={isOnlyWrongs || noStudies.length <= 0}
          className={`bg-green-500 text-white font-bold py-4 rounded text-2xl w-1/6 ${
            isOnlyWrongs || noStudies.length <= 0
              ? "opacity-50"
              : "hover:bg-green-700"
          }`}
        >
          未学習のみ
        </button>
      </div>
      <div className="flex justify-center gap-1 mt-4">
        <button
          onClick={() => {
            setQuestions(filteredWordsData)
            setIndex(questionNumber - 1)
            setMode("question")
          }}
          disabled={indexForContinue === 0 || filteredWordsData.length <= 0}
          className={`bg-green-500 text-white font-bold py-4 rounded text-2xl w-1/4 ${
            indexForContinue === 0 || filteredWordsData.length <= 0
              ? "opacity-50"
              : "hover:bg-green-700"
          }`}
        >
          選んで始める
        </button>
        <input
          className={"text-center text-2xl"}
          value={questionNumber}
          type={"number"}
          min={1}
          max={WordsData.length}
          onChange={(e) => {
            const n = Number(e.target.value)
            if (isNaN(n) || n <= 0 || n > filteredWordsData.length) return
            setQuestionNumber(n)
          }}
        />
        <div className={"text-2xl text-center py-4"}>番目</div>
      </div>
      <h2 className="text-center mt-12 text-4xl">復習</h2>
      <div className="flex justify-center gap-1 mt-4">
        <button
          disabled={recentWrongs.length === 0}
          onClick={() => {
            setQuestions(recentWrongs)
            setIndex(0)
            setMode("review")
          }}
          className={`bg-green-500 text-white font-bold py-4 rounded text-2xl w-1/4 ${
            recentWrongs.length === 0 ? "opacity-50" : "hover:bg-green-700"
          }`}
        >
          直前に間違えたところ
        </button>
        <button
          disabled={todayWrongs.length === 0}
          onClick={() => {
            setQuestions(todayWrongs)
            setIndex(0)
            setMode("review")
          }}
          className={`bg-green-500 text-white font-bold py-4 rounded text-2xl w-1/4 ${
            todayWrongs.length === 0 ? "opacity-50" : "hover:bg-green-700"
          }`}
        >
          今日間違えたところ
        </button>
      </div>
      <div className="flex justify-center gap-1 mt-4">
        <button
          disabled={yesterdayWrongs.length === 0}
          onClick={() => {
            setQuestions(yesterdayWrongs)
            setIndex(0)
            setMode("review")
          }}
          className={`bg-green-500 text-white font-bold py-4 rounded text-2xl w-1/4 ${
            yesterdayWrongs.length === 0 ? "opacity-50" : "hover:bg-green-700"
          }`}
        >
          昨日間違えたところ
        </button>
        <button
          disabled={twoDaysAgoWrongs.length === 0}
          onClick={() => {
            setQuestions(twoDaysAgoWrongs)
            setIndex(0)
            setMode("review")
          }}
          className={`bg-green-500 text-white font-bold py-4 rounded text-2xl w-1/4 ${
            twoDaysAgoWrongs.length === 0 ? "opacity-50" : "hover:bg-green-700"
          }`}
        >
          一昨日間違えたところ
        </button>
      </div>
    </main>
  )
}
