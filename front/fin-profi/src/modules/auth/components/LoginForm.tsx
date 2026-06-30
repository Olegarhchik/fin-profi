import { SubmitEventHandler, SVGProps } from "react"
import { useNavigate } from "react-router-dom"

import { Password, Profile } from "@/assets/icons"
import { AUTH, COLORS } from "@/constants"
import { useUserStore } from "@/store"
import { Button, Input } from "@/ui"

export function LoginForm() {
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
    <form id="login-form" onSubmit={handleSubmit}>
      <Input
        id="login-input"
        icon={<Profile {...iconProps} />}
        placeholder="Введите логин или email"
        text="Логин или email"
        name="login"
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
