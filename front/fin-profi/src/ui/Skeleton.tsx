import clsx from 'clsx'
import { PropsWithChildren } from 'react'

type SkeletonProps = PropsWithChildren<{
  show: boolean,
  width: number,
  height: number,
  dark?: boolean
}>

export function Skeleton({ show, width, height, children, dark = false }: SkeletonProps) {
  return show ?
    <div className={clsx("skeleton", { dark })} style={{ width, height }}></div>
    : children
}