import { useState } from 'react'
import './App.css'
import Localintro from './Localintro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Localintro />
  )
}

export default App
