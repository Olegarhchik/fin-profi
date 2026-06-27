import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { AUTH } from '@/constants'
import Logo from '@/assets/logo.svg?react'
import { NavigationButton } from '../ui/NavigationButton'
import { Divider } from '../ui/Divider'
import { Calc, Home, Login, Profile, Quiz } from '@/assets/icons'
import { useUserStore } from '@/store'

export function NavigationBar({ animationProp }) {
  const auth = useUserStore(state => state.auth)

  const animation = {
    initial: { y: "50%", opacity: 0, scale: 0.95, ...animationProp?.initial },
    animate: { y: 0, opacity: 1, scale: 1, ...animationProp?.animate },
    exit: { y: "-50%", opacity: 0, scale: 0.95, transition: { duration: 0.33, delay: 0.1 }, ...animationProp?.exit },
    transition: { type: "spring", duration: 0.66, delay: 0.1, ...animationProp?.transition }
  }

  const userId = localStorage.getItem("id")

  return (
    <motion.div
      className="navbar-container"
      {...animation}
    >
      <div className="navbar">
        <Logo />

        <Divider />

        <nav>
          <div className="nav-button-group">
            <NavigationButton
              to=""
              icon={<Home />}
              text="Главная"
            />

            <NavigationButton
              to="calculators"
              icon={<Calc />}
              text="Калькуляторы"
            />

            <NavigationButton
              to="quizzes"
              icon={<Quiz />}
              text="Викторины"
            />
          </div>

          {auth === AUTH.GUEST ?
            <NavigationButton
              to="login"
              icon={<Login />}
              text="Войти"
            /> :
            <NavigationButton
              to={`profile/${userId ?? ""}`}
              icon={<Profile />}
              text="Профиль"
            />
          }
        </nav>
      </div>
    </motion.div>
  );
}