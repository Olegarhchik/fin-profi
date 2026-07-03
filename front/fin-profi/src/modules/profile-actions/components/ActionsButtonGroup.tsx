import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Check, Exit, Pencil, Share, X } from '@/assets/icons'
import { ButtonGroup } from '@/components'
import { BASE_URL } from '@/constants'
import { useUserStore } from '@/store'
import { ExpandButton } from '@/ui'

type Props = {
  shouldShow: boolean,
  isEditing: boolean,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
  userId: string
}

export default function ActionsButtonGroup({ shouldShow, isEditing, setIsEditing, userId }: Props) {
  const logout = useUserStore(state => state.logout)
  const navigate = useNavigate()

  const [copied, setCopied] = useState(false)

  if (isEditing) return (
    <ButtonGroup key="while-editing">
      <ExpandButton
        icon={<X />}
        text="Отменить"
        onClick={async () => {
          setIsEditing(false)
        }}
      />

      <ExpandButton
        icon={<Check />}
        text="Принять"
        primary
        onClick={async () => {
          setIsEditing(false)
        }}
      />
    </ButtonGroup>
  )

  return (
    <ButtonGroup key="while-watching">
      {shouldShow && <ExpandButton
        icon={<Exit />}
        text="Выйти"
        onClick={() => {
          logout()
          navigate("/")
        }}
      />}

      <ExpandButton
        icon={copied ? <Check /> : <Share />}
        text={copied ? "Скопировано" : "Поделиться"}
        delay={0.1}
        onClick={async () => {
          await navigator.clipboard.writeText(`${BASE_URL}/profile/${userId}`.replace('/api', ''))

          setCopied(true)

          setTimeout(() => setCopied(false), 1000)
        }}
      />

      {shouldShow && <ExpandButton
        icon={<Pencil />}
        text="Редактировать"
        delay={0.2}
        onClick={() => setIsEditing(true)}
        primary
      />}
    </ButtonGroup>
  )
}
