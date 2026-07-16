import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { Cup } from '@/assets/icons'
import { COLORS } from '@/constants'
import { NamedSection } from '@/ui'
import { useUserStore } from '@/store'

import { RatingContext } from './RatingProvider'
import useScrollRef from '../useScrollRef'
import { buildRankList, getCurrentRank } from '../helpers'
import '../style.scss'

export function RatingSection() {
  const { count, rating } = useContext(RatingContext)
  const { userId: currentUserId } = useParams()
  const userId = useUserStore(state => state.id)

  const scrollRef = useScrollRef()

  const currentRank = getCurrentRank(rating, Number(currentUserId))
  const rankListElements = buildRankList(rating, currentRank, userId!)

  return (
    <NamedSection
      icon={<Cup height={14} width={14} />}
      text="Рейтинг"
      gap="12px"
      className="rating"
      ref={scrollRef}
      grow
    >
      <div className="rank-list">
        {rankListElements}
      </div>

      <div className="rank-info">
        <span
          style={{ color: COLORS.TEXT }}
          className="body"
        >Вы на {currentRank}-м месте</span>
        <span
          style={{ color: COLORS.MID_GRAY }}
          className="small"
        >из {count} участников</span>
      </div>
    </NamedSection>
  )
}
