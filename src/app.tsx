import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Background from './components/background';
import { Todos } from './components/todos';
import { NewBoard } from './components/newBoard';
import { NewTask } from './components/newTask';
// require('isomorphic-fetch');


function App() {
  
  fetch('/data.json')
      .then((response: any) => response.json())
      .then((data) => {
        localStorage.setItem("data", JSON.stringify(data));
      });

  // useEffect(() => {
  //   try {
  //     fetch('/src/data.json')
  //       .then((response: any) => response.json())
  //       .then((data) => {localStorage.setItem("data", JSON.stringify(data))});
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }, [])
  
  return (
    <>
      <Header />
      <Background />
      <Todos />
      <NewTask/>
      <NewBoard />
    </>
  )
}

export default App
