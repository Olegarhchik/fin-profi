import { SubmitEventHandler, SVGProps } from 'react'
import { useNavigate } from 'react-router-dom'

import { Email, Password, Profile } from '@/assets/icons'
import { AUTH, COLORS } from '@/constants'
import { useUserStore } from '@/store'
import { Button, Input } from '@/ui'

export function RegisterForm() {
  const navigate = useNavigate()

  const setAuth = useUserStore(state => state.setAuth)
  const setUser = useUserStore(state => state.setUser)

  const iconProps: SVGProps<SVGSVGElement> = {
    width: 14,
    height: 14,
    fill: COLORS.MID_GRAY
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const data = Object.fromEntries(formData)

    setUser({ id: 10 })
    setAuth(AUTH.AUTHORIZED)

    navigate("/")
  }

  return (
    <form id="register-form" onSubmit={handleSubmit}>
      <Input
        id="username-input"
        icon={<Profile {...iconProps} />}
        placeholder="Введите имя пользователя"
        text="Имя пользователя"
        name="username"
        delay={0.2}
      />

      <Input
        id="email-input"
        icon={<Email {...iconProps} />}
        placeholder="Введите email"
        text="Email"
        name="email"
        delay={0.15}
      />

      <Input
        id="password-input"
        icon={<Password {...iconProps} />}
        placeholder="Введите пароль"
        text="Пароль"
        type="password"
        name="password"
        delay={0.1}
      />

      <Input
        id="password-confirmation-input"
        icon={<Password {...iconProps} />}
        placeholder="Повторите пароль"
        text="Подтверждение пароля"
        type="password"
        name="password-confirmation"
        delay={0.05}
      />

      <Button
        text="Зарегистрироваться"
        primary
        type="submit"
      />
    </form>
  )
}
