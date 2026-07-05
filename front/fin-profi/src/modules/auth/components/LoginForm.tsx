import axios from "axios"
import { SubmitEventHandler, SVGProps } from "react"
import { useNavigate } from "react-router-dom"

import { Password, Profile } from "@/assets/icons"
import { COLORS } from "@/constants"
import { useToastStore, useUserStore } from "@/store"
import { Button, Input } from "@/ui"
import { type LoginRequest } from "@/api"

export function LoginForm() {
  const navigate = useNavigate()

  const login = useUserStore(state => state.login)
  const showToast = useToastStore(state => state.showToast)

  const iconProps: SVGProps<SVGSVGElement> = {
    width: 14,
    height: 14,
    fill: COLORS.MID_GRAY
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData) as LoginRequest

    if (Object.values(data).some(d => d === "")) {
      showToast("Не все поля заполнены")
      return
    }

    try {
      await login(data)
      navigate("/")
    } catch (error) {
      if (axios.isAxiosError(error))
        if (error.status === 401) {
          showToast("Неверные логин или пароль")
          return
        }

      showToast("Произошла ошибка")
    }
  }

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <Input
        id="login-input"
        icon={<Profile {...iconProps} />}
        placeholder="Введите email"
        text="Email"
        name="email"
        delay={0.1}
      />

      <Input
        id="password-input"
        icon={<Password {...iconProps} />}
        placeholder="Введите пароль"
        text="Пароль"
        type="password"
        name="password"
        delay={0.05}
      />

      <Button
        text="Войти"
        primary
        type="submit"
      />
    </form>
  )
}
