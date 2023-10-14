import { GameMode } from "../logic/scene"
import { useState } from "react"
import { getPrevRankName, setRanking } from "../logic/ranking"

export const RankSaver = ({ rural, point }: { rural: GameMode; point: number }) => {
  const [name, setName] = useState(getPrevRankName() ?? "")
  const [saved, setSaved] = useState(false)
  return saved ? (
    <p>ランキングを保存しました</p>
  ) : (
    <div>
      <p>
        名前を入力してください：
        <input type={"text"} value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        <button
          onClick={() => {
            if (!name) {
              alert("名前を入力してください")
              return
            }
            setRanking(rural, point, name)
            setSaved(true)
          }}
        >
          保存する
        </button>
      </p>
    </div>
  )
}
