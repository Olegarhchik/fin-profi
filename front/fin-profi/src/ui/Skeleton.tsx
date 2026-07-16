import clsx from 'clsx'
import { CSSProperties, PropsWithChildren } from 'react'

type SkeletonProps = PropsWithChildren<{
  show: boolean,
  width: number,
  height: number,
  dark?: boolean
}>

export function Skeleton({ show, width, height, children, dark = false }: SkeletonProps) {
  let styles: CSSProperties = {
    width,
    height
  }

  if (width === height) styles = { ...styles, borderRadius: "50%" }

  return show ?
    <div className={clsx("skeleton", { dark })} style={styles}></div>
    : children
}