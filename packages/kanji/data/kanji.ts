import { KanjiData1, KanjiData1Category } from "@/data/kanji001"
import { KanjiData2, KanjiData2Category } from "@/data/kanji002"
import { KanjiData3, KanjiData3Category } from "@/data/kanji003"
import { KanjiData4, KanjiData4Category } from "@/data/kanji004"
import { KanjiDataB1_2, KanjiDataB1_2Category } from "@/data/kanjiB001-2"
import { KanjiDataB1_1, KanjiDataB1_1Category } from "@/data/kanjiB001-1"
import { KanjiData5, KanjiData5Category } from "@/data/kanji005"
import { KanjiData6, KanjiData6Category } from "@/data/kanji006"
import { KanjiData7, KanjiData7Category } from "@/data/kanji007"
import { KanjiData8, KanjiData8Category } from "@/data/kanji008"
import { KanjiDataB2_1, KanjiDataB2_1Category } from "@/data/kanjiB002-1"
import { KanjiDataB2_2, KanjiDataB2_2Category } from "@/data/kanjiB002-2"
import { KanjiData9, KanjiData9Category } from "@/data/kanji009"
import { KanjiData10, KanjiData10Category } from "@/data/kanji010"
import { KanjiData11, KanjiData11Category } from "@/data/kanji011"
import { KanjiData12, KanjiData12Category } from "@/data/kanji012"
import { KanjiDataB3_1, KanjiDataB3_1Category } from "@/data/kanjiB003_1"
import { KanjiDataB3_2, KanjiDataB3_2Category } from "@/data/kanjiB003_2"
import { KanjiData20, KanjiData20Category } from "@/data/kanji020"
import { KanjiData19, KanjiData19Category } from "@/data/kanji019"
import { KanjiData18, KanjiData18Category } from "@/data/kanji018"
import { KanjiData17, KanjiData17Category } from "@/data/kanji017"
import { KanjiDataB4_2, KanjiDataB4_2Category } from "@/data/kanjiB004_2"
import { KanjiDataB4_1, KanjiDataB4_1Category } from "@/data/kanjiB004_1"
import { KanjiData16, KanjiData16Category } from "@/data/kanji016"
import { KanjiData15, KanjiData15Category } from "@/data/kanji015"
import { KanjiData14, KanjiData14Category } from "@/data/kanji014"
import { KanjiData13, KanjiData13Category } from "@/data/kanji013"
import { KanjiDataB5_1, KanjiDataB5_1Category } from "@/data/kanjiB005_1"
import { KanjiDataB6_2, KanjiDataB6_2Category } from "@/data/kanjiB006_2"
import { KanjiData21, KanjiData21Category } from "@/data/kanji021"
import { KanjiData22, KanjiData22Category } from "@/data/kanji022"
import { KanjiData23, KanjiData23Category } from "@/data/kanji023"
import { KanjiData24, KanjiData24Category } from "@/data/kanji024"
import { KanjiDataB6_1, KanjiDataB6_1Category } from "@/data/kanjiB006_1"
import { KanjiData25, KanjiData25Category } from "@/data/kanji025"
import { KanjiData26, KanjiData26Category } from "@/data/kanji026"
import { KanjiDataB5_2, KanjiDataB5_2Category } from "@/data/kanjiB005_2"
import { KanjiData27, KanjiData27Category } from "@/data/kanji027"
import { KanjiData28, KanjiData28Category } from "@/data/kanji028"
import { KanjiDataB7_1, KanjiDataB7_1Category } from "@/data/kanjiB007_1"
import { KanjiDataB7_2, KanjiDataB7_2Category } from "@/data/kanjiB007_2"
import { KanjiData29, KanjiData29Category } from "@/data/kanji029"
import { KanjiData30, KanjiData30Category } from "@/data/kanji030"
import { KanjiData31, KanjiData31Category } from "@/data/kanji031"
import { KanjiData32, KanjiData32Category } from "@/data/kanji032"
import { KanjiDataB8_1, KanjiDataB8_1Category } from "@/data/kanjiB008_1"
import { KanjiDataB8_2, KanjiDataB8_2Category } from "@/data/kanjiB008_2"
import { KanjiData33, KanjiData33Category } from "@/data/kanji033"
import { KanjiData34, KanjiData34Category } from "@/data/kanji034"
import { KanjiData35, KanjiData35Category } from "@/data/kanji035"

type QuestionType = "read" | "write"

export type Kanji = {
  id: string
  sentence: string
  kanji: string
  kana: string
  questionType: QuestionType
}

export const KanjiDataCategories = [
  KanjiData1Category,
  KanjiData2Category,
  KanjiData3Category,
  KanjiData4Category,
  KanjiDataB1_1Category,
  KanjiDataB1_2Category,
  KanjiData5Category,
  KanjiData6Category,
  KanjiData7Category,
  KanjiData8Category,
  KanjiDataB2_1Category,
  KanjiDataB2_2Category,
  KanjiData9Category,
  KanjiData10Category,
  KanjiData11Category,
  KanjiData12Category,
  KanjiDataB3_1Category,
  KanjiDataB3_2Category,
  KanjiData13Category,
  KanjiData14Category,
  KanjiData15Category,
  KanjiData16Category,
  KanjiDataB4_1Category,
  KanjiDataB4_2Category,
  KanjiData17Category,
  KanjiData18Category,
  KanjiData19Category,
  KanjiData20Category,
  KanjiDataB5_1Category,
  KanjiDataB5_2Category,
  KanjiData21Category,
  KanjiData22Category,
  KanjiData23Category,
  KanjiData24Category,
  KanjiDataB6_1Category,
  KanjiDataB6_2Category,
  KanjiData25Category,
  KanjiData26Category,
  KanjiData27Category,
  KanjiData28Category,
  KanjiDataB7_1Category,
  KanjiDataB7_2Category,
  KanjiData29Category,
  KanjiData30Category,
  KanjiData31Category,
  KanjiData32Category,
  KanjiDataB8_1Category,
  KanjiDataB8_2Category,
  KanjiData33Category,
  KanjiData34Category,
  KanjiData35Category,
]

export const KanjiData: Kanji[] = [
  ...KanjiData1,
  ...KanjiData2,
  ...KanjiData3,
  ...KanjiData4,
  ...KanjiDataB1_1,
  ...KanjiDataB1_2,
  ...KanjiData5,
  ...KanjiData6,
  ...KanjiData7,
  ...KanjiData8,
  ...KanjiDataB2_1,
  ...KanjiDataB2_2,
  ...KanjiData9,
  ...KanjiData10,
  ...KanjiData11,
  ...KanjiData12,
  ...KanjiDataB3_1,
  ...KanjiDataB3_2,
  ...KanjiData13,
  ...KanjiData14,
  ...KanjiData15,
  ...KanjiData16,
  ...KanjiDataB4_1,
  ...KanjiDataB4_2,
  ...KanjiData17,
  ...KanjiData18,
  ...KanjiData19,
  ...KanjiData20,
  ...KanjiDataB5_1,
  ...KanjiDataB5_2,
  ...KanjiData21,
  ...KanjiData22,
  ...KanjiData23,
  ...KanjiData24,
  ...KanjiDataB6_1,
  ...KanjiDataB6_2,
  ...KanjiData25,
  ...KanjiData26,
  ...KanjiData27,
  ...KanjiData28,
  ...KanjiDataB7_1,
  ...KanjiDataB7_2,
  ...KanjiData29,
  ...KanjiData30,
  ...KanjiData31,
  ...KanjiData32,
  ...KanjiDataB8_1,
  ...KanjiDataB8_2,
  ...KanjiData33,
  ...KanjiData34,
  ...KanjiData35,
]
