import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCom from './ClassCom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ClassCom/>
    </>
  )
}

export default App
