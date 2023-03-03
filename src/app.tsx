import { useState } from 'react'
import Header from './components/header'
import Background from './components/background'
import { Todos } from './components/todos'
function App() {
  return (
    <>
      <Header />
      <Background />
      <Todos />
    </>
  )
}

export default App
