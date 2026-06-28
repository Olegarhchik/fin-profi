import { ReactNode } from "react"
import clsx from "clsx"

import { Divider } from "@/ui"
import { COLORS } from "@/constants"

import RankCard from "../components/RankCard"
import { UserRating, Highlight } from "../types"

export function buildRankList(rating: UserRating[], currentRank: number, userId: number) {
  let elements: ReactNode[] = []

  const currentUser = rating[currentRank - 1]
  const nextUser = rating[currentRank - 2]

  const userRank = rating.findIndex(user => user.id === userId)

  const start = 0
  const end = 8 +
    Number(currentRank === 9 || currentRank === 10) +
    Number(currentRank === 10)

  elements = elements.concat(rating
    .slice(start, end)
    .map((user, index) => (
      <RankCard
        key={user.id}
        highlight={
          clsx(
            index === 0 && "leader",
            index === currentRank - 1 && "current-user",
            index === userRank && "you"
          ) as Highlight
        }
        rank={index + 1}
        user={user}
        delay={0.025 * index}
      />
    ))
  )

  if (currentRank > 10) {
    elements = elements.concat([
      <Divider>
        <div className="dashed-line"></div>
        <span style={{ color: COLORS.BACKGROUND }} className="label">•••</span>
        <div className="dashed-line"></div>
      </Divider>,

      <RankCard
        key={nextUser.id}
        rank={currentRank - 1}
        user={nextUser}
        delay={0.025 * 8}
      />,

      <RankCard
        key={currentUser.id}
        rank={currentRank}
        highlight="you"
        user={currentUser}
        delay={0.025 * 9}
      />
    ])
  }

  return elements
}