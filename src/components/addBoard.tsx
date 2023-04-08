import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { handleClickAddBoard } from "./header";

export function AddBoard(props: any) {
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
    const setindexes = () => {
      const saved: any = localStorage.getItem("indexes");
      const initialValue: any = JSON.parse(saved);
      setIndexes(initialValue || "")
    }
    setindexes()
  }, [localStorage.getItem("indexes")])

  const [board, setBoard] = useState(0);

  useEffect(() => {
    setBoard(Number(document.querySelector(".active")?.id));
  });
  
  return (
    <section className="addBoard" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickAddBoard}></div>
      <div className="board">
        <div className="box">
          <form id="boardForm">
            <h2>Add Board</h2>
            <div className="title">
              <label htmlFor="title">Board Name</label>
              <input id="title" type="text" placeholder="e.g. Web Design" />
            </div>
            <div className="columns">
              <label htmlFor="button column1 column2 column3 column4 column5">Board Columns</label>
              <div className="column">
                <input type="text" placeholder="e.g. Todo"/>
                <img src="/icon-cross.svg" alt="The cross icon." className="cross" />
              </div>
              <button id="button">+ Add New Column</button>
            </div>
          </form>
          <button type="submit" form="addTaskForm" value="SubmitNewBoard">Create New Board</button>
        </div>
      </div>
    </section>
  )
}