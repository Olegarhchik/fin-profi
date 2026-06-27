import { motion, MotionProps } from 'framer-motion'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { Crown, ProfileCircle } from '@/assets/icons'
import { COLORS } from '@/constants'
import { Highlight, UserRating } from '../types'

type Props = {
  rank: number,
  user: UserRating,
  highlight?: Highlight,
  delay?: number
}

export default function RankCard({ rank, user, highlight, delay }: Props) {
  const animation: MotionProps = {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
    transition: { delay: 0.33 + (delay ?? 0) }
  }

  return (
    <motion.div
      className={clsx("rank-card", highlight)}
      {...animation}
    >
      <span className="body rank-number">{rank}</span>

      <ProfileCircle width={28} height={28} />

      <div className="user-data">
        <Link to={`/profile/${user.id}`} >
          <span className="body username">
            {user.name}
          </span>
        </Link>
        <span
          style={{ color: COLORS.MID_GRAY }}
          className="small score"
        >{user.points} очков</span>
      </div>

      {highlight == "leader" && <Crown width={14} height={14} />}

      {highlight == "you" && <span style={{ color: COLORS.PRIMARY_YELLOW }} className="small">Вы</span>}
    </motion.div>
  )
}