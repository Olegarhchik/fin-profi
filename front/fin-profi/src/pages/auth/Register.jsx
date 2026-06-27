import React from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '@/store'
import { AUTH } from '@/constants'

export default function Register() {
  const setAuth = useUserStore(state => state.setAuth)

  return (
    <Link
      onClick={() => {
        localStorage.setItem("id", 10)
        setAuth(AUTH.AUTHORIZED)
      }}
      to="/"
    >Зарегистрироваться</Link>
  )
}
