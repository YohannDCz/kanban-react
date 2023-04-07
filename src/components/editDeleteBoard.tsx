import React, { useState }from 'react';
import ReactDOM from 'react-dom';

export default function EditDeleteBoard() {
  const showEditBoard = () => {
    const newBoard: any = document.querySelector(".newBoard");
    const editDelete: any = document.querySelector("#editDeleteBoard");
    const editBoard: any = document.querySelector("#editAddBoard");


    if (editDelete?.style.display === "flex") {
      newBoard.style.display = "flex";
      editDelete.style.display = "none";
      editBoard.innerText = "Edit Board";
    }
  }

  const showDeleteBoard = () => {
    const deleteBoard: any = document.querySelector("#deleteBoard");
    const editDelete: any = document.querySelector("#editDeleteBoard");

    if (editDelete?.style.display === "flex") {
      editDelete.style.display = "none";
      deleteBoard.style.display = "flex";
    }
  }

  return (
    <div className="editDelete" id="editDeleteBoard" style={{display: "none"}}>
      <div className="edit" onClick={showEditBoard}>Edit Board</div>
      <div className="delete" onClick={showDeleteBoard}>Delete Board</div>
    </div>
  )
}