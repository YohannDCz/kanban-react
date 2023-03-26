import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { handleClickAddBoard } from "./header";

export function NewBoard(props: any) {
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

  const [editAdd, setEditAdd] = useState(document.getElementById("editAddBoard")?.innerText === "Add Board");
  const [board, setBoard] = useState(0);

  useEffect(() => {
    setBoard(Number(document.querySelector(".board.board1.active")?.id))
    setEditAdd(document.getElementById("editAddBoard")?.innerText === "Add Board")
  })
  
  return (
    <section className="newBoard" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickAddBoard}></div>
      <div className="board">
        <div className="box">
          <form id="boardForm">
            <h2 id="editAddBoard">Action</h2>
            <div className="title">
              <label htmlFor="title">Board Name</label>
              {editAdd && <input id="title" type="text" placeholder="e.g. Web Design" />}
              {!editAdd && <input id="title" type="text" defaultValue={data?.boards[board]?.name} />}
            </div>
            <div className="columns">
              <label htmlFor="button column1 column2 column3 column4 column5">Board Columns</label>
              {editAdd && <div className="column">
                  <input type="text" placeholder="e.g. Todo"/>
                  <img src="/icon-cross.svg" alt="The cross icon." className="cross" />
                </div>}
              {!editAdd && data?.boards[board]?.columns.map((column: any, index: any) => {
                return (
                <div id={index} key={index} className="column">
                  <input type="text" defaultValue={column.name} placeholder="e.g.Todo"/>
                  <img src="/icon-cross.svg" alt="The cross icon." className="cross" />
                </div>
                )
              })}
              <button id="button">+ Add New Column</button>
            </div>
          </form>
          <button type="submit" form="addTaskForm" value="SubmitNewBoard">Create New Board / Save Changes</button>
        </div>
      </div>
    </section>
  )
}