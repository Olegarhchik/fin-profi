import React, { ReactNode, useState } from 'react'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import clsx from 'clsx'

type ExpandButtonProps = {
  icon: ReactNode,
  text: string,
  primary?: boolean,
  delay?: number,
  onClick: React.MouseEventHandler<HTMLDivElement>,
}

export function ExpandButton({ icon, text, primary, delay, onClick }: ExpandButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isClickable, setIsClickable] = useState(false)

  const animation: MotionProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { delay: 0.2 + (delay ?? 0) } },
    transition: { delay: 0.2 },
    whileHover: { padding: "10px 16px" },
    onAnimationComplete: () => setIsClickable(true),
  }

  const textAnimation: MotionProps = {
    initial: { opacity: 0, width: 0, marginRight: 0 },
    animate: { opacity: 1, width: "auto", marginRight: 5 },
    exit: { opacity: 0, width: 0, marginRight: 0 }
  }

  return (
    <motion.div
      className={clsx("expand-button", { primary })}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => {
        setTimeout(() => {
          setIsExpanded(false)
        }, 200)
      }}
      onClick={onClick}
      style={isClickable ? {} : { "pointerEvents": "none" }}
      {...animation}
    >
      <AnimatePresence>
        {text && isExpanded && (
          <motion.span
            className="text"
            {...textAnimation}
          >{text}</motion.span>
        )}
      </AnimatePresence>
      {icon}
    </motion.div>
  )
}