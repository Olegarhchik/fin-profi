import { motion } from 'framer-motion'

import { Toast } from '@/constants'

import { getVariants } from '../getVariants'
import { useAnimateClose } from '../useAnimateClose'

type ToastProps = {
  toast: Toast,
  collapsed: boolean,
  index: number,
  count: number
}

export function ToastCard({ toast, collapsed, index, count }: ToastProps) {
  const shouldCollapse = collapsed && count !== 1
  const variants = getVariants(count)

  const scope = useAnimateClose(index, toast.id)

  return (
    <motion.div
      key={toast.id}
      className="toast"
      ref={scope}
      onClick={collapsed ? () => { } : toast.action}
      custom={index}
      variants={variants}
      initial="initial"
      animate={shouldCollapse ? "collapse" : "expand"}
      whileHover={shouldCollapse ? "hover" : {}}
      exit="initial"
    >
      <div className="body">{toast.message}</div>
    </motion.div>
  )
}
