import { useState, useEffect } from 'react'
import Header from './components/header'
import Background from './components/background'
import { Todos } from './components/todos'
import { NewTask } from './components/newTask'
import { NewBoard } from './components/newBoard'
import { handleClickAddTask } from './components/header'

function App() {

  useEffect(() => {
    try {
      fetch('/src/data.json')
      .then((response: any) => response.json())
      .then((data) => {localStorage.setItem("data", JSON.stringify(data))});
    } catch(err) {
      console.log(err)
    }
    console.log("ok");
  }, [])

  console.log(localStorage.getItem("data"))

  return (
    <>
      <Header />
      <Background />
      <Todos />
      <NewTask handleClickAddTask={handleClickAddTask} />
      <NewBoard />
    </>
  )
}

export default App
