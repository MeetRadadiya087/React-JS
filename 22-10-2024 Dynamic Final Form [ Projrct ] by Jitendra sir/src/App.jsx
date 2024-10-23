import { useState } from 'react'
import './App.css'
import DynamicFinalFormCom from './DynamicFinalFormCom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DynamicFinalFormCom />
  )
}

export default App
