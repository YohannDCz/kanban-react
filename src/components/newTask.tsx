import React from "react";
import ReactDOM from "react-dom";
import { handleClickAddTask } from "./header";


export function NewTask(props: any) {

  return (
    <section className="newTask" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickAddTask}></div>
      <div className="task">
        <div className="box">
          <form id="taskForm" className="taskForm">
            <h2>Add Task</h2>
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
              <div className="subtask subtask1">
                <input id="subtask1" type="text" placeholder="e.g. Make coffee"/>
                <img src="/icon-cross.svg" alt="" className="cross" />
              </div>
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