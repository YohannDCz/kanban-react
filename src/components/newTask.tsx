import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { handleClickAddTask } from "./header";


export function NewTask(props: any) {
  const [task, setTask] = useState(() => {
    const saved: any = localStorage.getItem("task");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });

  const [isEditTask, setIsEditTask] = useState(document.querySelector(".taskForm")?.querySelector("h2")?.innerText === "Edit Task");
  
  // let boardName = document.querySelector(".board.active")?.querySelector("h2")?.innerText;
  // let indexBoard: any;
  // data.boards.find(function(item: any, i:number) {
  //   if (item.name === boardName) {
  //     indexBoard = i;
  //   }
  // });
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
  
  // useEffect(() => {
  //   const getPathForUid: any = (uid: any,obj: any,thisPath = []) => {

  //   if(Array.isArray(obj)) {
  //       return obj.reduce((acc,item,idx) => getPathForUid(uid,item,thisPath.concat(idx)),[]);
  //   }

  //   return obj[uid] === uid ? thisPath : getPathForUid(uid,obj.children,thisPath.concat('children'));

  // }

  // const object = getPathForUid("Build UI for onboarding flow", data);

  // console.log(object);
  // })
  

  const [editAdd, setEditAdd] = useState(document.querySelector(".taskForm")?.querySelector("h2")?.innerText === "Add Task");

  console.log(editAdd)
  useEffect(() => {
    const title = document.querySelector("#title");
    const description = document.querySelector("#desription");
  

    // const task = localStorage.getItem("targetTask");
    // const taskInfo = data.boards.forEach((board: any) => board.columns.forEach((column: any) => column.tasks.find((task1: any) => task1?.classList?.contains(task))))
    // console.log(taskInfo);
  })

  console.log(task);

  return (
    <section className="newTask" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickAddTask}></div>
      <div className="task">
        <div className="box">
          <form id="taskForm" className="taskForm">
            <h2>Action Task</h2>
            <div className="title">
              <label htmlFor="title">Title</label>
              {editAdd && <input id="title" type="text" placeholder="e.g. Take coffee break" />}
              {!editAdd && <input id="title" type="text" value={task.title} placeholder="e.g. Take coffee break" />}
            </div>
            <div className="Description">
              <label htmlFor="description">Description</label>
              {editAdd && <textarea id="description" placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />}
              {!editAdd && <textarea id="description" value={task.description} placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />}
            </div>
            <div className="subtasks">
              <label htmlFor="button subtask1 subtask2 subtask3 subtask4 subtask5">Subtasks</label>
              {task.subtasks.map((subtask: any, index: number) => {
             return (<div key={index} className={"subtask subtask " + subtask.title.replace(/\s/g, '')}>
                <input id="subtask1" type="text" value={subtask.title} placeholder="e.g. Make coffee"/>
                <img src="/icon-cross.svg" alt="" className="cross" />
              </div>
             )
              })}
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