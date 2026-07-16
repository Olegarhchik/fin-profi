import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { NamedSection, ProgressBar } from '@/ui'
import { Star } from '@/assets/icons'
import { COLORS } from '@/constants'

import { RatingContext } from './RatingProvider'
import { getCurrentRank } from '../helpers'

export function NextRankSection() {
  const { rating } = useContext(RatingContext)
  const { userId } = useParams()

  const currentRank = getCurrentRank(rating, Number(userId))

  const currentUser = rating[currentRank - 1]
  const nextUser = rating[currentRank - 2]

  if (currentRank === 1) return null

  return (
    <NamedSection
      icon={<Star />}
      text="До следующего места"
      gap="8px"
      className="next-rank"
    >
      <div className="content-header">
        <div className="points">
          <span
            style={{ color: COLORS.TEXT }}
            className="digits"
          >{nextUser.points - currentUser.points}</span>

          <span
            style={{ color: COLORS.MID_GRAY }}
            className="small"
          >очков осталось</span>
        </div>

        <div className="currentUser">
          <span
            style={{ color: COLORS.TEXT }}
            className="body"
          >{currentRank - 1}-е место</span>

          <span
            style={{ color: COLORS.MID_GRAY }}
            className="small"
          >{nextUser.name}</span>
        </div>
      </div>

      <ProgressBar
        value={currentUser.points / nextUser.points * 100}
        height={8}
      />

      <span
        style={{
          color: COLORS.MID_GRAY,
          textAlign: "center"
        }}
        className="small"
      >{currentUser.points} / {nextUser.points} очков</span>
    </NamedSection>
  )
}
