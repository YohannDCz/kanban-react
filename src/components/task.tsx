import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { handleClickAddTask } from './header';

export default function Task(props: any) {

  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });


  const [indexes, setIndexes] = useState(() => {
    const saved: any = localStorage.getItem("indexes");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  })

  useEffect(() => {
    const saved: any = localStorage.getItem("indexes");
    const initialValue: any = JSON.parse(saved);
    setIndexes(initialValue || "");
  })

  console.log(indexes);

  const [editAdd, setEditAdd] = useState(document.querySelector(".taskForm")?.querySelector("h2")?.innerText === "Add Task");
  const [task, setTask] = useState(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);
  
  useEffect(() => {
    return setTask(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex])
  })// console.log(task)
  
  console.log(data)
  console.log(task)

  return (
    <section className='task'>
      <div className="filter3" onClick={handleClickAddTask}></div>
      <div className="taskPanel">
        <div className="box">
          <h2 className="title">Research pricing points of various competitors and trial different business models</h2>
          <h3 className="description">We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</h3>
          <div className="subtasks">
            <h3 className="title">Subtasks (2 of 3)</h3>
            <div className="subtask">
              <input type="checkbox" className="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1">Research competitor pricing and business models</label>
            </div>
            <div className="subtask">
              <input type="checkbox" className="checkbox" id="checkbox2" />
              <label className="title" htmlFor="checkbox2">Outline a business model that works for our solution</label>
            </div>
            <div className="subtask">
              <input type="checkbox" className="checkbox" id="checkbox3" />
              <label className="title" htmlFor="checkbox3">Talk to potential customers about our proposed solution and ask for fair price expectancy</label>
            </div>
          </div>
          <div className="status">
            <h3 className="title">Current Status</h3>
            <div className="selected">
              <h3>Doing</h3>
              <img src="/icon-chevron-down.svg" alt="The down chevron" />
            </div>
            <div className="options">
              <h3 className='state'>To do</h3>
              <h3 className='state'>Doing</h3>
              <h3 className='state'>Done</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}