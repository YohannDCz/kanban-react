import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Panel(props: any) {
  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });
  
  const [num, setNum] = useState(data.boards.length);
  
  
  useEffect(() => {
    const boards: any = document.querySelectorAll(".board1");
    const boardName: any = document.querySelector(".board-name")?.querySelector("h1");
    
    for (let i = 0; i < boards.length; i++) {
      boards[i].addEventListener("click", function () {
        let j = 0;
        while (j < boards.length) {
          boards[j++].className = "board board1";
        }
        boards[i].className = "board board1 active";
        boardName.innerText = boards[i].querySelector("h2").innerText
      })
    }
  })
  
  useEffect(() => {
    const element: any = document.querySelector(".board");
    const dom: any = ReactDOM.findDOMNode(element);
    dom.className = "board board1 active"
  })
  
  console.log(localStorage.getItem("data"));
  return (
    <nav style={{display: "none"}}>
      <div className="filter" onClick={props.handleClickHeader}></div>
      <div className="panel">
          <div className="all-boards">
            <h1 className="title">All Boards ({num})</h1>
            <div className="boards">
              {data.boards.map((item: any, i: any) => {
                return (
                <div key={i} className="board board1">
                  <img src="/icon-board.svg" alt="" className="board-icon" />
                  <h2 className="sub-title">{item.name}</h2>
                </div>)})}
            </div>
            <div className="addBoards" onClick={props.handleClickAddBoard}>
              <div className="board">
                <img src="/icon-board.svg" alt="" className="board-icon-purple" />
                <h2 className="sub-title">+ Create New Board</h2>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <div className="night-shift">
              <img src="/icon-light-theme.svg" alt="" className="light-theme"/>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <img src="/icon-dark-theme.svg" alt="" className="dark-theme" />
            </div>
            <div className="hide" onClick={props.handleClickHeader}>
              <img src="/icon-hide-sidebar.svg" alt="" className="eye" />
              <p>Hide Sidebar</p>
            </div>
          </div>
      </div>
    </nav>
  )
}





export default Panel