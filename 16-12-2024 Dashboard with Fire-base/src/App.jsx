import { useState } from 'react'
import './App.css'
import SignUp from './Components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import LogIn from './Components/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/Login' element={<LogIn/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
