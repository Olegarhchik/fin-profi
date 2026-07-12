import { useState } from 'react'

import { ContinueSection } from '@/components'
import { Content, SideBar } from '@/ui'

import { ProfileInfoSection } from '@/modules/profile-actions'
import { StatisticsSection } from '@/modules/statistics'
import { ActivitySection } from '@/modules/activity'
import { data, NextRankSection, RatingProvider, RatingSection, type UserRating } from '@/modules/rating'

export default function Profile() {
  const [rating, setRating] = useState<UserRating[]>(data.list)

  return (
    <>
      <Content>
        <ProfileInfoSection />

        <StatisticsSection />

        <ActivitySection />
      </Content>

      <SideBar>
        <RatingProvider value={{ count: data.count, rating, setRating }}>
          <RatingSection />

          <NextRankSection />
        </RatingProvider>

        <ContinueSection
          name="Название статьи"
          id={2}
          articleId={0}
          module="Название модуля"
          progress={80}
        />
      </SideBar>
    </>
  )
}