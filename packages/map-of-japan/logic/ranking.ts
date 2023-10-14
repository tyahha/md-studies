import { GameMode } from "./scene"

export interface Rank {
  name: string
  point: number
}

export type Ranking = Rank[]

const KeyPrefix = "MAP_STUDY_RANKING_"

const getKey = (rural: GameMode): string => `${KeyPrefix}_${rural}`

export const saveRanking = (rural: GameMode, ranking: Ranking): void => {
  localStorage.setItem(getKey(rural), JSON.stringify(ranking))
}

export const loadRanking = (rural: GameMode): Ranking | null => {
  const s = localStorage.getItem(getKey(rural))
  if (s) {
    const a = JSON.parse(s)
    if (Array.isArray(a)) {
      return a
    }
    return null
  }
  return null
}

export const isRankIn = (rural: GameMode, point: number): boolean => {
  const ranking = loadRanking(rural)
  if (!ranking) return true

  for (let i = 0; i < ranking.length; i++) {
    if (ranking[i].point < point) {
      return true
    }
  }
  return false
}

export const setRanking = (rural: GameMode, point: number, name: string): void => {
  let ranking = loadRanking(rural)
  const newRank = {
    point,
    name,
  }
  if (!ranking) {
    ranking = [newRank]
  } else {
    const newRanking: Ranking = []
    let i = 0
    let pushNew = false
    while (i < ranking.length && newRanking.length !== 3) {
      if (!pushNew && ranking[i].point < point) {
        newRanking.push(newRank)
        pushNew = true
      } else {
        newRanking.push(ranking[i++])
      }
    }
    ranking = newRanking
  }

  saveRankName(name)
  saveRanking(rural, ranking)
}

const PREV_NAME_KEY = "PREV_RANK_NAME"

export const getPrevRankName = (): string | null => {
  return localStorage.getItem(PREV_NAME_KEY)
}

export const saveRankName = (name: string): void => {
  localStorage.setItem(PREV_NAME_KEY, name)
}
