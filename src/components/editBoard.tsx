import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { handleClickEditBoard } from "./header";

export function EditBoard(props: any) {
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
      setIndexes(initialValue || "")
   })

  const [board, setBoard] = useState(Number(document.querySelector(".active")?.id));

  useEffect(() => {
    setBoard(Number(document.querySelector(".active")?.id));
  });

  console.log(board);
  
  return (
    <section className="editBoard" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickEditBoard}></div>
      <div className="board">
        <div className="box">
          <form id="boardForm">
            <h2>Edit Board</h2>
            <div className="title">
              <label htmlFor="title">Board Name</label>
              <input id="title" type="text" defaultValue={data?.boards[board]?.name} />
            </div>
            <div className="columns">
              <label htmlFor="button column1 column2 column3 column4 column5">Board Columns</label>
              {data?.boards[board]?.columns.map((column: any, index: any) => {
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