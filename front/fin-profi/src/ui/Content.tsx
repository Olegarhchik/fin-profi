import { motion, MotionProps, MotionStyle, Target } from 'framer-motion'
import { PropsWithChildren } from 'react'

type ContentType = PropsWithChildren<{
  style?: MotionStyle,
  animateExit?: Target
}>

export function Content({ children, style, animateExit }: ContentType) {
  const animation: MotionProps = {
    initial: { y: "50%", opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: "-50%", opacity: 0, scale: 0.95, transition: { duration: 0.33 }, ...animateExit },
    transition: { type: "spring", duration: 0.66 }
  }

  return (
    <motion.div
      className="content-container"
      {...animation}
      style={style}
    >
      {children}
    </motion.div>
  )
}
