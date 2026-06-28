import { Link } from 'react-router-dom'

import { useUserStore } from '@/store'
import { AUTH } from '@/constants'

export default function Register() {
  const setAuth = useUserStore(state => state.setAuth)
  const setUser = useUserStore(state => state.setUser)

  return (
    <Link
      onClick={() => {
        setUser({ id: 10 })
        setAuth(AUTH.AUTHORIZED)
      }}
      to="/"
    >Зарегистрироваться</Link>
  )
}
