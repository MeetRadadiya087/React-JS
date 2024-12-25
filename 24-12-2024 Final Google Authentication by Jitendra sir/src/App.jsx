import { useState } from 'react'
import './App.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

