import { useState } from 'react'
import { Provider } from "react-redux"
import { store } from "./App/store"
import Api from './Components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
        <Api />
      </Provider>
    </div>
  )
}

export default App
