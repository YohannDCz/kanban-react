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

  const [name, setName] = useState('');
  const [columns, setColumns] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  const [boards, setBoards] = useState<string[]>([]);

  const handleAddBoard = (event: any) => {
    event.preventDefault();
    const nextIndex = boards.length;
    setBoards([...boards, `board ${nextIndex + 1}`]);
  }

  function handleBoardChange(e: any, index: any) {
    const newBoards = [...boards];
    newBoards[index] = e.target.value;
    setBoards(newBoards);
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
    <section className="editBoard" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickEditBoard}></div>
      <div className="board">
        <div className="box">
          <form id="editTaskForm">
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
              {boards.map((board, index) => (
                <div key={index} className={`column column${index}"`}>
                  <input type="text" placeholder="e.g. Todo" onChange={(event) => handleBoardChange(event, index)}/>
                  <img src="/icon-cross.svg" alt="The cross icon." className="cross"  onClick={deleteBoard}/>
                  <p style={{display: "none"}}>Can't be empty</p>
                </div>
              ))}
              <button id="button" onClick={(event) => handleAddBoard(event)}>+ Add New Column</button>
            </div>
          </form>
          <button type="submit" form="editTaskForm" value="SubmitNewBoard">Save Changes</button>
        </div>
      </div>
    </section>
  )
}