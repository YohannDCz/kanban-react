import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { handleClickTask } from "./header";


export function NewTask(props: any) {
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
  const [columns, setColumns] = useState(data?.boards[indexes.boardIndex]?.columns)
  
  useEffect(() => {
    setTask(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex])
    setColumns(data?.boards[indexes.boardIndex]?.columns)
  })
  
  useEffect(() => {
    const newTask: any = document.querySelector(".newTask");
    const filter: any = document.querySelector(".filter2");
    const panel: any = document.querySelector(".editTaskPanel");

    const panelHeight = panel.offsetHeight;

    if (panelHeight > window.innerHeight) {
      filter.style.height = panelHeight * 1.1 + "px"; 
      newTask.style.height = panelHeight * 1.1 + "px"; 
      document.body.style.overflow = "scroll";
    } else {
      filter.style.height = "100vh";
      newTask.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
  })

  function displayShow() {
    const options: any = document.querySelector(".options");
    if (options?.style.display === "none") {
      options.style.display = "block";
    } else if (options?.style.display === "block") {
      options.style.display = "none";
    }
  }

  return (
    <section className="newTask" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickTask}></div>
      <div className="editTaskPanel">
        <div className="box">
          <form id="taskForm" className="taskForm">
            {editAdd && <h2>Add Task</h2>}
            {!editAdd && <h2>Edit Task</h2>}
            <div className="title">
              <label htmlFor="title">Title</label>
              {editAdd && <input id="title" type="text" placeholder="e.g. Take coffee break" />}
              {!editAdd && <input id="title" type="text" defaultValue={task?.title} placeholder="e.g. Take coffee break" />}
            </div>
            <div className="Description">
              <label htmlFor="description">Description</label>
              {editAdd && <textarea id="description" placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />}
              {!editAdd && <textarea id="description" defaultValue={task?.description} placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />}
            </div>
            <div className="subtasks">
              <label htmlFor="button subtask1 subtask2 subtask3 subtask4 subtask5">Subtasks</label>
              {task?.subtasks.map((subtask: any, index: number) => {
                return (<div key={index} className={"subtask subtask " + subtask.title.replace(/\s/g, '')}>
                    <input id="subtask1" type="text" defaultValue={subtask.title} placeholder="e.g. Make coffee"/>
                    <img src="/icon-cross.svg" alt="" className="cross" />
                  </div>
                )
              })}
              <button id="button">+ Add New Subtask</button>
            </div>
            <div className="status">
              <h3 className="title">Current Status</h3>
              <div className="selected" onClick={displayShow}>
                <h3>{task?.status}</h3>
                <img src="/icon-chevron-down.svg" alt="The down chevron" />
              </div>
              <div className="options" style={{display: "none"}}>
                {columns?.map((column: any, index: any) =>
                  <h3 className={'state state' + index} onClick={displayShow}>{column.name}</h3>
                )}
              </div>
            </div>
          </form>
          <button type="submit" form="addTaskForm" value="SubmitNewTask">Create Task</button>
        </div>
      </div>
    </section>
  )

}