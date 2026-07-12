import { useEffect } from 'react'

import { ProfileCircle } from '@/assets/icons'
import { Section, Skeleton } from '@/ui'
import { useToastStore, useUserStore } from '@/store'
import { useParamsId } from '@/hooks'

import ActionsButtonGroup from './ActionsButtonGroup'
import { useProfileEditingState, useUserQuery } from '../hooks'
import '../style.scss'

export function ProfileInfoSection() {
  const [isEditing, setIsEditing] = useProfileEditingState()
  const ownerId = useParamsId("userId")
  const currentUserId = useUserStore(state => state.id)
  const showToast = useToastStore(state => state.showToast)
  const { data: credentials, isError, isLoading } = useUserQuery(ownerId!)

  const isOwner = ownerId === currentUserId
  const isLoadingSkeleton = isLoading || isError

  useEffect(() => {
    if (isError)
      showToast("Не удалось загрузить данные пользователя")
  }, [isError])

  return (
    <Section
      padding="32px 40px"
      shrink
      className="user-info"
    >
      <ProfileCircle width={96} height={96} />

      <div className="user-credentials">
        <Skeleton
          show={isLoadingSkeleton}
          width={200}
          height={47}
        >
          <input
            name="username"
            type="text"
            value={credentials?.name ?? ""}
            className="h1"
            readOnly={!isEditing}
            onChange={(e) => { }}
          />
        </Skeleton>

        {isOwner &&
          <Skeleton
            show={isLoadingSkeleton}
            width={160}
            height={31}
          >
            <input
              name="email"
              type="text"
              value={credentials?.email ?? ""}
              className="body"
              readOnly={!isEditing}
              onChange={(e) => { }}
            />
          </Skeleton>
        }
      </div>

      <ActionsButtonGroup
        shouldShow={isOwner}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        userId={ownerId!}
        isLocked={isLoadingSkeleton}
      />
    </Section>
  )
}
