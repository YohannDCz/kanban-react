import { useState } from 'react'
import reactLogo from '../public/react.png'
import './scss/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App
