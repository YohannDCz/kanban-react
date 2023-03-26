import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Background from './components/background';
import { Todos } from './components/todos';
import { NewBoard } from './components/newBoard';
import { NewTask } from './components/newTask';
import Task from './components/task';
// require('isomorphic-fetch');


function App() {
  
  fetch('/data.json')
      .then((response: any) => response.json())
      .then((data) => {
        localStorage.setItem("data", JSON.stringify(data));
      });

  // useEffect(() => {
  //   async function promiseFunction () {
  //     try {
  //       const response = await fetch('/src/data.json');
  //       const data = response.json();
  //       localStorage.setItem("data", JSON.stringify(data))
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   // console.log(localStorage.getItem("data", JSON.parse(data)))
  //   promiseFunction()
  // }, [])
  
  return (
    <>
      <NewTask/>
      <Header />
      <Background />
      <Todos />
      <NewBoard />
      <Task />
    </>
  )
}

export default App
