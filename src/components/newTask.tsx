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

  const [editAdd, setEditAdd] = useState(document.getElementById("#editAddTask")?.innerText === "Add Task");
  const [task, setTask] = useState(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);
  const [columns, setColumns] = useState(data?.boards[indexes.boardIndex]?.columns);
  const [board, setBoard] = useState(0);

  useEffect(() => {
    setTask(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);
    setColumns(data?.boards[indexes.boardIndex]?.columns);
    setBoard(Number(document.querySelector(".board.board1.active")?.id));
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

  const displayShow = (e: any) => {
    const options: any = e.target.nextElementSibling;
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
            <h2 id="addEditTask">Add Task</h2>
            <div className="title">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" defaultValue={task?.title} placeholder="e.g. Take coffee break" />
            </div>
            <div className="Description">
              <label htmlFor="description">Description</label>
              <textarea id="description" placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />
            </div>
            <div className="subtasks">
              <label>Subtasks</label>
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
                <h3>{data?.boards[board]?.columns[0]?.name}</h3>
                <img src="/icon-chevron-down.svg" alt="The down chevron" />
              </div>
              <div className="options" style={{display: "none"}}>
                {data.boards[board]?.columns?.map((column: any, index: any) => {
                  return <h3 key={index} className={'state state' + index} onClick={displayShow}>{column?.name}</h3>
                })}
              </div>
            </div>
          </form>
          <button type="submit" form="addTaskForm" value="SubmitNewTask">Create Task</button>
        </div>
      </div>
    </section>
  )

}