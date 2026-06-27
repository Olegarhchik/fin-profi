import React from 'react'
import { Outlet, useNavigate } from 'react-router'

import { Content } from '@/ui'

export default function AuthLayout() {
  const navigate = useNavigate()

  return (
    <Content
      style={{ justifyContent: "center", alignItems: "center" }}
      animateExit={{ position: "absolute", left: 0, right: 0 }}
    >
      <button onClick={() => navigate(-1)}>Назад</button>

      <div>
        Здесь общий шаблон под страницы

        <button onClick={() => navigate("/register", { replace: true })}>
          регистрации
        </button>

        и

        <button onClick={() => navigate("/login", { replace: true })}>
          входа
        </button>
      </div>

      <Outlet />
    </Content>
  )
}