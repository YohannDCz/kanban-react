import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { handleClickAddTask } from "./header";


export function NewTask(props: any) {
  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });

  const [isEditTask, setIsEditTask] = useState(document.querySelector(".taskForm")?.querySelector("h2")?.innerText === "Edit Task");
  
  let boardName = document.querySelector(".board.active")?.querySelector("h2")?.innerText;
  let indexBoard: any;
  data.boards.find(function(item: any, i:number) {
    if (item.name === boardName) {
      indexBoard = i;
    }
  });
  // const [boardIndex, setBoardIndex] = useState(indexBoard) 

  // let columnName = document.querySelector(".board.active")?..innerText;
  // let indexColumn: any;
  // data.boards.find(function(item: any, i:number) {
  //   if (item.name === columnName) {
  //     indexColumn = i;
  //   }
  // });
  // const [columnIndex, setColumnIndex] = useState(indexColumn);

  // let taskName = document.querySelector(".board.active")?.querySelector("h2").innerText;
  // let indexTask: any;
  // data.boards.find(function(item: any, i:number) {
  //   if (item.name === taskName) {
  //     indexTask = i;
  //   }
  // });
  // const [taskIndex, setTaskIndex] = useState(indexTask)


  // useEffect(() => {
  // var headings = document.evaluate(`//h1[contains(., '${task}')]`, document, null, XPathResult.ANY_TYPE, null );
  // var thisHeading = headings.iterateNext();
  // console.log(thisHeading);


  // })
  

  useEffect(() => {
    const editAdd = document.querySelector(".taskForm")?.querySelector("h2")?.innerText;
    const title = document.querySelector("#title");
    const description = document.querySelector("#desription");
  
    if (editAdd === "Edit Task") {
    }

    const task = localStorage.getItem("targetTask");
    const taskInfo = data.boards.forEach((board: any) => board.columns.forEach((column: any) => column.tasks.find((task1: any) => task1?.classList?.contains(task))))
    console.log(taskInfo);
  })


  return (
    <section className="newTask" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickAddTask}></div>
      <div className="task">
        <div className="box">
          <form id="taskForm" className="taskForm">
            <h2></h2>
            <div className="title">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" placeholder="e.g. Take coffee break" />
            </div>
            <div className="Description">
              <label htmlFor="description">Description</label>
              <textarea id="description" placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />
            </div>
            <div className="subtasks">
              <label htmlFor="button subtask1 subtask2 subtask3 subtask4 subtask5">Subtasks</label>
              {/* { isEditTask && data.boards[boardIndex].columns.tasks.subtasks.map((subtask: any, index: number) => { */}
              <div className={"subtask subtask"}>
                <input id="subtask1" type="text" placeholder="e.g. Make coffee"/>
                <img src="/icon-cross.svg" alt="" className="cross" />
              </div>
              {/* })} */}
              <div className="subtask subtask2">
                <input id="subtask2" type="text" placeholder="e.g. Drink coffe & smile"/>
                <img src="/icon-cross.svg" alt="" className="cross" />
              </div>
              <button id="button">+ Add New Subtask</button>
            </div>
            <div className="status">
              <label htmlFor="status1">Status</label>
              <div id="status1">
                <h3>Todo</h3>
              <img src="/icon-chevron-up.svg" alt="" className="downchevron1" style={{transform: "rotate(180deg)"}} />
              </div>
            </div>
          </form>
          <button type="submit" form="addTaskForm" value="SubmitNewTask">Create Task</button>
        </div>
      </div>
    </section>
  )

}