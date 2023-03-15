import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { isUint8ClampedArray } from 'util/types';
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

  const [editAdd, setEditAdd] = useState(document.querySelector(".taskForm")?.querySelector("h2")?.innerText === "Add Task");
  const [task, setTask] = useState(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);
  
  useEffect(() => {
    return setTask(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex])
  })

  useEffect(() => {
    const selected: any = document.querySelector(".selected");
    const options: any = document.querySelector(".options");
    const state: any = document.querySelector(".state");

    console.log(selected);
    console.log(options);
    console.log(state);

    selected.addEventListener("click", function() {
      if (options.style.display === "none") {
        options.style.display === "block";
      } else if (options.style.display === "block") {
        options.style.display === "none";
      }
    })

    state.addEventListener("click", function() {
      options.style.display = "none";
    })
  })
  return (
    <section className='task' style={{display: "none"}}>
      <div className="filter3" onClick={handleClickAddTask}></div>
      <div className="taskPanel">
        <div className="box">
          <h2 className="title">{task?.title}</h2>
          <h3 className="description">{task?.description}</h3>
          <div className="subtasks">
            <h3 className="title">Subtasks ({task?.subtasks.filter((subtask: any) => subtask.isCompleted === "true").length} of {task?.subtasks.length})</h3>
            {task?.subtasks.map((subtask: any, index: any) => 
              <div className="subtask">
                <input type="checkbox" className="checkbox" id={"checkbox" + index} />
                <label htmlFor={"checkbox" + index}>{subtask?.title}</label>
              </div>
            )}
          </div>
          <div className="status">
            <h3 className="title">Current Status</h3>
            <div className="selected">
              <h3>{task?.status}</h3>
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