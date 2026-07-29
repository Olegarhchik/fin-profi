import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { slugify } from 'transliteration'

import { Check, Link } from '@/assets/icons'
import { BASE_URL } from '@/constants'

type Props = {
  text: string
}

export function HeaderBlock({ text }: Props) {
  const [isHovering, setIsHovering] = useState(false)
  const [copied, setCopied] = useState(false)
  const location = useLocation()

  const slug = slugify(text)

  return (
    <motion.div
      className="header-content"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      onClick={async () => {
        await navigator.clipboard.writeText(`${BASE_URL.replace('/api', '')}${location.pathname}#${slug}`)

        setCopied(true)

        setTimeout(() => setCopied(false), 1000)
      }}
    >
      <h2 id={slug}>{text}</h2>

      {isHovering && !copied && <Link width={16} height={16} />}
      {copied && <Check width={16} height={16} />}
    </motion.div>
  )
}