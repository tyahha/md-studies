import { GameMode } from "../logic/scene"
import { useMemo } from "react"
import { loadRanking, Ranking } from "../logic/ranking"

export const RankingContent = ({ gameMode }: { gameMode: GameMode }) => {
  const ranking = useMemo<Ranking>(() => {
    return (loadRanking(gameMode) ?? []).sort((a, b) => b.point - a.point)
  }, [gameMode])

  return (
    <>
      <p className={"title"}>ランキング</p>
      {ranking.map((rank, i) => {
        return <p>{`${i + 1}位 ${rank.point}点 ${rank.name}`}</p>
      })}
    </>
  )
}
