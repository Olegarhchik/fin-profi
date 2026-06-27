import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProfileCircle } from '@/assets/icons'
import { Section } from '@/ui'
import data from '../data'

import { useProfileEditingState } from '../useProfileEditingState'
import ActionsButtonGroup from './ActionsButtonGroup'
import '../style.css'


export function ProfileInfoSection() {
  const { userId: reqUserId } = useParams()
  const currentUserId = localStorage.getItem("id")

  const [credentials, setCredentials] = useState(data.find(obj => obj.id.toString() == reqUserId))
  const [isEditing, setIsEditing] = useProfileEditingState()

  return (
    <Section
      padding="32px 40px"
      shrink
      className="user-info"
    >
      <ProfileCircle width={96} height={96} />

      <div className="user-credentials">
        <div className="username">
          <input
            name="username"
            type="text"
            value={credentials.name ?? ""}
            className="h1"
            readOnly={!isEditing}
            onChange={(e) => setCredentials(prevCredentials => (
              { ...prevCredentials, name: e.target.value }
            ))}
          />
        </div>

        {reqUserId === currentUserId && <div className="email">
          <input
            name="email"
            type="text"
            value={credentials.email ?? ""}
            className="body"
            readOnly={!isEditing}
            onChange={(e) => setCredentials(prevCredentials => (
              { ...prevCredentials, email: e.target.value }
            ))}
          />
        </div>}
      </div>

      <ActionsButtonGroup
        shouldShow={reqUserId === currentUserId}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        userId={reqUserId}
      />
    </Section>
  )
}
