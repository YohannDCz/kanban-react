import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Panel(props: any) {
  // Default data structure to prevent undefined errors
  const defaultData = { boards: [] };
  
  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    if (!saved) return defaultData;
    try {
      const initialValue: any = JSON.parse(saved);
      return initialValue?.boards ? initialValue : defaultData;
    } catch (error) {
      console.error("🐛 [Panel] Error parsing localStorage data:", error);
      console.log("🔧 [Panel] Using default data structure for boards");
      return defaultData;
    }
  });
  
  const [num, setNum] = useState(data?.boards?.length || 0);
  
  useEffect(() => {
    const boards: any = document.querySelectorAll(".board1");
    const boardName: any = document.querySelector(".board-name")?.querySelector("h1");
    const todoList: any = document.querySelectorAll(".todo-lists")
    const width: boolean = window.innerWidth >= 620;
    const menu: any = document.querySelector('nav')

    for (let i = 0; i < 3; i++) {
      boards[i].addEventListener("click", function () {
        let j = 0;
        while (j < boards.length) {
          todoList[j].classList.remove("active");
          boards[j++].classList.remove("active");
        }
        boards[i].classList.add("active");
        todoList[i].classList.add("active");
        boardName.innerText = boards[i].querySelector("h2").innerText
      })
    }
  })
  

  useEffect(() => {
    const element: any = document.querySelector(".board");
    const dom: any = ReactDOM.findDOMNode(element);
    dom.classList.add("active");

    const element2: any = document.querySelectorAll(".todo-lists")[0];
    const dom2: any = ReactDOM.findDOMNode(element2);
    dom2.classList.add("active");
  })
  
  return (
    <nav style={{display: "none"}}>
      <div className="filter" onClick={props.handleClickHeader}></div>
      <div className="panel">
          <div className="all-boards">
            <h1 className="title">All Boards ({num})</h1>
            <div className="boards">
              {data?.boards?.map((item: any, i: any) => {
                return (
                <div key={i} id={i} className="board board1">
                  <img src="/icon-board.svg" alt="" className="board-icon" />
                  <h2 className="sub-title">{item?.name || 'Untitled Board'}</h2>
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