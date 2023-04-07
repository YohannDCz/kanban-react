import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function DeleteBoard() {
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
  
  const [board, setBoard] = useState(0);

  useEffect(() => {
    const setboard = () => setBoard(Number(document.querySelector(".active")?.id));
    setboard();
  }, [Number(document.querySelector(".active")?.id)]);
  
  const showDeleteBoard = () => {
    const deleteBoard: any = document.querySelector("#deleteBoard");
    if (deleteBoard.style.display === "flex") {
      deleteBoard.style.display = "none";
    }
  }

  return (
    <div className="deleteBoard" id="deleteBoard" style={{display: "none"}}>
      <div className="filter4" onClick={showDeleteBoard}></div>
      <div className="container">
        <div className="box">
          <h2>Delete this board?</h2>
          <div className="description">
            Are you sure you want to delete the '{data?.boards[board]?.name}' board? This action will remove all columns and tasks and cannot be reversed.
          </div>
          <div className="buttons">
            <button className="deleteBoardButton">Delete</button>
            <button className="cancelBoardButton">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}