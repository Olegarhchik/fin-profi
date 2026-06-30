import { motion, MotionProps, MotionStyle, Target } from 'framer-motion'
import { PropsWithChildren } from 'react'

type ContentProps = PropsWithChildren<{
  style?: MotionStyle,
  animateAbsolute?: boolean,
  center?: boolean
}>

export function Content({ children, style, animateAbsolute, center }: ContentProps) {
  const animation: MotionProps = {
    initial: {
      y: "50%", opacity: 0, scale: 0.95,
      ...(animateAbsolute ? { position: "absolute", left: 0, right: 0 } : {})
    },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: {
      y: "-50%", opacity: 0, scale: 0.95, transition: { duration: 0.33 },
      ...(animateAbsolute ? { position: "absolute", left: 0, right: 0 } : {})
    },
    transition: { type: "spring", duration: 0.66 }
  }

  if (center) {
    style = {
      ...style,
      alignItems: "center",
      justifyContent: "center"
    }
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
