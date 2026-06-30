import { Outlet } from 'react-router-dom'

import { Section } from '@/ui'

import { AuthLayout } from './AuthLayout'
import '../style.scss'

export function AuthSection() {
  return (
    <Section
      padding="0 40px"
      className="auth-section"
      shrink
      layout
    >
      <AuthLayout />

      <Outlet />
    </Section>
  )
}