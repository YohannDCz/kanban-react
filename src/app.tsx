import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Background from './components/background';
import { Todos } from './components/todos';
import { AddBoard } from './components/addBoard';
import { EditBoard } from './components/editBoard';
import { AddTask } from './components/addTask';
import { EditTask } from './components/editTask';
import Task from './components/task';
import DeleteBoard from './components/deleteBoard';
import DeleteTask from './components/deleteTask';
// require('isomorphic-fetch');


function App() {
  
  // fetch('/data.json')
  //     .then((response: any) => response.json())
  //     .then((data) => {
  //       localStorage.setItem("data", JSON.stringify(data));
  //     });

  async function fetchData() {
    try {
      const response = await fetch('/data.json'); // fetch the JSON file
      const data = await response.json(); // parse the response as JSON
      localStorage.setItem('data', JSON.stringify(data)); // store the parsed JSON in local storage
    } catch (error) {
      console.error(error); // handle any errors that occur during the fetch or parsing
    }
  }

  fetchData()
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
      <Header />
      <Background />
      <Todos />
      <Task />
      <EditBoard />
      <AddBoard />
      <AddTask />
      <EditTask/>
      <DeleteBoard />
      <DeleteTask />
    </>
  )
}

export default App
