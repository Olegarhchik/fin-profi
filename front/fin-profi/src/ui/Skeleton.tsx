import { PropsWithChildren } from 'react'

type SkeletonProps = PropsWithChildren<{
  show: boolean,
  width: number,
  height: number,
}>

export function Skeleton({ show, width, height, children }: SkeletonProps) {
  return show ?
    <div className="skeleton" style={{ width, height }}></div>
    : children
}