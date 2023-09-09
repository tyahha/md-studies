"use client"

import { TitleView } from "@/components/Title"
import { useState } from "react"
import { QuestionView } from "@/components/QuestionView"
import { AppContext, Mode } from "@/context"
import dayjs from "dayjs"
import "dayjs/locale/ja"
import { QuestionType, WordDataType } from "@/data/wordsData"
dayjs.locale("ja")

export default function Home() {
  const [mode, setMode] = useState<Mode>("title")
  const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState<WordDataType[]>([])
  const [questionType, setQuestionType] = useState<QuestionType>("J2E")

  return (
    <AppContext.Provider
      value={{
        index,
        setIndex,
        questions,
        setQuestions,
        mode,
        setMode,
        questionType,
        setQuestionType,
      }}
    >
      <div
        className={`min-h-screen ${
          questionType === "listening"
            ? "bg-blue-100"
            : questionType === "J2E"
            ? "bg-green-100"
            : "bg-amber-100"
        }`}
      >
        {mode === "title" ? <TitleView /> : <QuestionView />}
      </div>
    </AppContext.Provider>
  )
}
