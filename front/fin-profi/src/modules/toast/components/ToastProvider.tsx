import { PropsWithChildren, useState } from 'react'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'

import { useToastStore } from '@/store'

import { ToastCard } from './ToastCard'
import { GAP, HEIGHT, WIDTH } from '../constants'
import { CollapseToast } from './CollapseToast'
import '../style.scss'

type ToastProviderProps = PropsWithChildren<{
  className: string
}>

export function ToastProvider({ className, children }: ToastProviderProps) {
  const toasts = useToastStore(state => state.toasts)
  const count = toasts.length

  const [collapsed, setCollapsed] = useState<boolean>(true)
  const shouldCollapse = count > 1 && !collapsed
  const shouldExpand = count > 1 && collapsed

  const animation: MotionProps = {
    initial: {
      opacity: 0,
      y: -100,
      scaleY: -1,
      x: (WIDTH - 27) / 2,
      zIndex: 10
    },

    animate: {
      opacity: 0.95,
      y: (HEIGHT + GAP) * count
    },

    exit: {
      opacity: 0,
      y: -100,
    }
  }

  return (
    <>
      <motion.div
        className="toast-group"
        style={{ cursor: shouldExpand ? "pointer" : "default" }}
        onClick={() => { shouldExpand && setCollapsed(false) }}
        initial={{ transition: { delayChildren: 0.05 } }}
      >
        <AnimatePresence>
          {toasts.map((toast, index) => {
            const props = { collapsed, toast, index, count }

            return (
              <ToastCard
                key={toast.id}
                {...props}
              />
            )
          })}

          {shouldCollapse && (
            <CollapseToast
              onClick={() => setCollapsed(true)}
              {...animation}
            />
          )}
        </AnimatePresence>
      </motion.div>

      <div className={className}>
        {children}
      </div>
    </>
  )
}