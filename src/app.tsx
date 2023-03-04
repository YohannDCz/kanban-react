import { useState } from 'react'
import Header from './components/header'
import Background from './components/background'
import { Todos } from './components/todos'
import { NewTask } from './components/newTask'
import { NewBoard } from './components/newBoard'

function App() {
  return (
    <>
      <Header />
      <Background />
      <Todos />
      <NewTask />
      <NewBoard />
    </>
  )
}

export default App
