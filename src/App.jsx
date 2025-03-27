import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameCategory from './components/GameCategory';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<GameCategory />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/team-invite/:token?" element={<TeamInvite />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/logout" element={<ProtectedRouteWithContext><Logout /></ProtectedRouteWithContext>} />
        <Route path="/profile" element={<ProtectedRouteWithContext><Profile /></ProtectedRouteWithContext>} />
        <Route path="/welcome" element={<ProtectedRouteWithContext><Welcome /></ProtectedRouteWithContext>} />
        <Route path="/onboarding/:companyId" element={<ProtectedRoute><Welcome /></ProtectedRoute>} />
        <Route path="/oauth/callback" element={<ProtectedRouteWithContext><ThirdPartAuthSuccess /></ProtectedRouteWithContext>} />
        <Route path="/success/:sessionId?" element={<ProtectedRouteWithContext><PaymentSuccess /></ProtectedRouteWithContext>} />
        <Route path="/" element={<ProtectedRouteWithContext><Home /></ProtectedRouteWithContext>} />
        <Route path="*" element={<Navigate to="/not-found" replace />} /> */}
      </Routes>
    </div>
    </>
  )
}

export default App
