import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BackToHome from './pages/BackToHome'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<BackToHome />} />
      </Routes>
    </Router>

  )
}

export default App