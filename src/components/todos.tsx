import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { handleClickAddTask } from './header';


export function Todos() {

  const [data, setData] = useState();
  useEffect(() => setData(JSON.parse(localStorage.getItem("data") || "")), []);

  const main = document.querySelector("main");
  const boardName = document.querySelector(".board-name")?.querySelector("h1")?.innerText;

  return (
    <main>
      <div className='todo-lists'>
        <div className='todo-list todo'>
          <div className='todo-title'>
            <div className="todo-color"></div>
            <h1>To do (4)</h1>
          </div>
          <div className="cards">
            <div className="card" onClick={handleClickAddTask}>
              <h2>Build UI for onboarding flow</h2>
              <h3>0 of 3 substasks</h3>
            </div>
            <div className="card" onClick={handleClickAddTask}>
              <h2>Build UI for search</h2>
              <h3>0 of 1 substasks</h3>
            </div>
            <div className="card" onClick={handleClickAddTask}>
              <h2>Build settings UI</h2>
              <h3>0 of 2 substasks</h3>
            </div>
            <div className="card" onClick={handleClickAddTask}>
              <h2>QA and test all major user journeys</h2>
              <h3>0 of 2 substasks</h3>
            </div>
          </div>
        </div>
        <div className='todo-list todo'>
          <div className='todo-title'>
            <div className="todo-color"></div>
            <h1>To do (4)</h1>
          </div>
          <div className="cards">
            <div className="card">
              <h2>Build UI for onboarding flow</h2>
              <h3>0 of 3 substasks</h3>
            </div>
            <div className="card">
              <h2>Build UI for search</h2>
              <h3>0 of 1 substasks</h3>
            </div>
            <div className="card">
              <h2>Build settings UI</h2>
              <h3>0 of 2 substasks</h3>
            </div>
            <div className="card">
              <h2>QA and test all major user journeys</h2>
              <h3>0 of 2 substasks</h3>
            </div>
          </div>
        </div>
        <div className='todo-list todo'>
          <div className='todo-title'>
            <div className="todo-color"></div>
            <h1>To do (4)</h1>
          </div>
          <div className="cards">
            <div className="card">
              <h2>Build UI for onboarding flow</h2>
              <h3>0 of 3 substasks</h3>
            </div>
            <div className="card">
              <h2>Build UI for search</h2>
              <h3>0 of 1 substasks</h3>
            </div>
            <div className="card">
              <h2>Build settings UI</h2>
              <h3>0 of 2 substasks</h3>
            </div>
            <div className="card">
              <h2>QA and test all major user journeys</h2>
              <h3>0 of 2 substasks</h3>
            </div>
          </div>
        </div>
        <div className='todo-list todo'>
          <div className='todo-title'>
            <div className="todo-color"></div>
            <h1>To do (4)</h1>
          </div>
          <div className="cards">
            <div className="card">
              <h2>Build UI for onboarding flow</h2>
              <h3>0 of 3 substasks</h3>
            </div>
            <div className="card">
              <h2>Build UI for search</h2>
              <h3>0 of 1 substasks</h3>
            </div>
            <div className="card">
              <h2>Build settings UI</h2>
              <h3>0 of 2 substasks</h3>
            </div>
            <div className="card">
              <h2>QA and test all major user journeys</h2>
              <h3>0 of 2 substasks</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
