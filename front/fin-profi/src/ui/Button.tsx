import { To, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

type ButtonProps = {
  left?: ReactNode,
  text: string,
  right?: ReactNode,
  to: To,
  replace?: boolean,
  className?: string
}

export function Button({ left, text, right, to, replace, className }: ButtonProps) {
  const navigate = useNavigate()
  const animation: MotionProps = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1, transition: { type: "spring" } },
    whileHover: { scale: 0.96 }
  }

  return (
    <motion.button
      className={clsx("button", className)}
      onClick={() => navigate(to, { replace })}
      {...animation}
    >
      {left}
      <span>{text}</span>
      {right}
    </motion.button>
  )
}