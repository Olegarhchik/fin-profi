import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { NavigationBar } from '@/components'
import { Main, Calculators, Quizzes, Profile, Article, NotFound } from '@/pages'
import { AuthLayout, Login, Register } from '@/pages/auth'
import './App.css'

export default function App() {
  const location = useLocation()
  const show = ["/login", "/register"].every(path => path != location.pathname)

  return (
    <div className="container">
      <AnimatePresence>
        {show && <NavigationBar />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <main key={show ? location.pathname : "no-animate"}>
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/acticles/:articleId" element={<Article />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </AnimatePresence>
    </div>
  )
}
