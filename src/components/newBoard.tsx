import React, { useState } from "react";
import ReactDOM from "react-dom";
import { handleClickAddTask } from "./header";
import { handleClickAddBoard } from "./header";

export function NewBoard() {

  return (
    <section className="newBoard" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickAddBoard}></div>
      <div className="board">
        <div className="box">
          <form id="boardForm">
            <h2></h2>
            <div className="title">
              <label htmlFor="title">Board Name</label>
              <input id="title" type="text" placeholder="e.g. Take coffee break" />
            </div>
            <div className="subtasks">
              <label htmlFor="button column1 column2 column3 column4 column5">Board Columns</label>
              <div className="column column1">
                <input id="subtask1" type="text"/>
                <img src="/icon-cross.svg" alt="" className="cross" />
              </div>
              <div className="column column2">
                <input id="subtask2" type="text" />
                <img src="/icon-cross.svg" alt="" className="cross" />
              </div>
              <div className="column column3">
                <input id="subtask2" type="text"/>
                <img src="/icon-cross.svg" alt="" className="cross" />
              </div>
              <button id="button">+ Add New Column</button>
            </div>
          </form>
          <button type="submit" form="addTaskForm" value="SubmitNewBoard">Create New Board / Save Changes</button>
        </div>
      </div>
    </section>
  )
}