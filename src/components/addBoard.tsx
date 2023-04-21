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
  
  const [name, setName] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  const [columns, setColumns] = useState<string[]>(["column0"]);

  const handleAddBoard = (event: any) => {
    event.preventDefault();
    const nextIndex = columns.length;
    setColumns([...columns, `board ${nextIndex + 1}`]);
  }

  function handleBoardChange(e: any, index: any) {
    const newColumns = [...columns];
    newColumns[index] = e.target.value;
    setColumns(newColumns);
    e.target.style.border = "1px solid var(--clr-d-6)";
    e.target.parentNode.querySelector("img").src = "/icon-cross.svg";
    e.target.parentNode.querySelector("p").style.display = "none";
    console.log(e.target.value);
  }

  const deleteBoard = (e: any) => {
    if (e.target.previousElementSibling.value === "") {
      e.target.src = "/icon-cross-red.png";
      e.target.previousElementSibling.style.border = "1px solid var(--clr-p-1)"
      e.target.previousElementSibling.style.outline = "none";
      e.target.nextElementSibling.style.display = "flex";
    } else {
      e.target.parentElement.remove();
    }
  }

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
              {columns.map((board, index) => (
                <div key={index} className={`column column${index}"`}>
                  <input type="text" placeholder="e.g. Todo" onChange={(event) => handleBoardChange(event, index)}/>
                  <img src="/icon-cross.svg" alt="The cross icon." className="cross"  onClick={deleteBoard}/>
                  <p style={{display: "none"}}>Can't be empty</p>
                </div>
              ))}
              <button id="button" onClick={(event) => handleAddBoard(event)}>+ Add New Column</button>
            </div>
            <button type="submit" form="boardForm" value="SubmitNewBoard" onSubmit={(event) => handleSubmit(event)}>Create New Board</button>
          </form>
        </div>
      </div>
    </section>
  )
}