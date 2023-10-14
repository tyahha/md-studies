import { japanArea, JapanArea } from "../data/japan-area"
import { shuffleArray } from "../util/util"

export enum Scene {
  Title,
  Gaming,
  Result,
  RankingSelect,
  RankingView,
}

export enum GameMode {
  All,
  Chiho,
  HokkaidoTohoku,
  Kanto,
  Chubu,
  Kinki,
  ChugokuShikoku,
  Kyusyu,
  PrefectureToCapital,
  CaptalToPrefecture,
}

export enum JapanRural {
  All,
  Chiho,
  HokkaidoTohoku,
  Kanto,
  Chubu,
  Kinki,
  ChugokuShikoku,
  Kyusyu,
}

export const getGameModeText = (rural: GameMode): string => {
  switch (rural) {
    case GameMode.All:
      return "全国都道府県"
    case GameMode.Chiho:
      return "地方"
    case GameMode.HokkaidoTohoku:
      return "北海道・東北地方"
    case GameMode.Kanto:
      return "関東地方"
    case GameMode.Chubu:
      return "中部地方"
    case GameMode.Kinki:
      return "近畿地方"
    case GameMode.ChugokuShikoku:
      return "中国・四国地方"
    case GameMode.Kyusyu:
      return "九州地方"
    case GameMode.PrefectureToCapital:
      return "県名⇒県庁所在地"
    case GameMode.CaptalToPrefecture:
      return "県庁所在地⇒県名"
    default:
      return ""
  }
}

export const getGameModeRural = (rural: GameMode): JapanRural => {
  switch (rural) {
    case GameMode.All:
      return JapanRural.All
    case GameMode.Chiho:
      return JapanRural.Chiho
    case GameMode.HokkaidoTohoku:
      return JapanRural.HokkaidoTohoku
    case GameMode.Kanto:
      return JapanRural.Kanto
    case GameMode.Chubu:
      return JapanRural.Chubu
    case GameMode.Kinki:
      return JapanRural.Kinki
    case GameMode.ChugokuShikoku:
      return JapanRural.ChugokuShikoku
    case GameMode.Kyusyu:
      return JapanRural.Kyusyu
    case GameMode.PrefectureToCapital:
      return JapanRural.All
    case GameMode.CaptalToPrefecture:
      return JapanRural.All
    default:
      return JapanRural.All
  }
}

export const getQuestions = (mode: GameMode): JapanArea[] => {
  const filter: (a: JapanArea) => boolean =
    mode === GameMode.All
      ? (a) => a.type === "prefecture"
      : mode === GameMode.Chiho
      ? (a) => a.type === "rural"
      : mode === GameMode.HokkaidoTohoku
      ? (a) => a.type === "prefecture" && (a.rural === "tohoku" || a.rural === "hokkaido")
      : mode === GameMode.Kanto
      ? (a) => a.type === "prefecture" && a.rural === "kanto"
      : mode === GameMode.Chubu
      ? (a) => a.type === "prefecture" && a.rural === "chubu"
      : mode === GameMode.Kinki
      ? (a) => a.type === "prefecture" && a.rural === "kinki"
      : mode === GameMode.Kyusyu
      ? (a) => a.type === "prefecture" && a.rural === "kyusyu"
      : mode === GameMode.ChugokuShikoku
      ? (a) => a.type === "prefecture" && (a.rural === "chugoku" || a.rural === "shikoku")
      : mode === GameMode.PrefectureToCapital || mode === GameMode.CaptalToPrefecture
      ? (a) => a.type === "prefecture" && !isSimpleCapitalName(a)
      : () => false

  return shuffleArray(Array.from(japanArea.values()).filter(filter))
}

export const isSimpleCapitalName = (a: JapanArea) => {
  return initString(a.capitalName) === initString(a.name)
}

const initString = (s: string): string => s.slice(0, s.length - 1)
