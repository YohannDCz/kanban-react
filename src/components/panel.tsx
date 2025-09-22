import { useEffect, useState } from "react";

function Panel(props: any) {
  // Default data structure to prevent undefined errors
  const defaultData = { boards: [] };
  -
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

    // 🔧 [Panel] Adding event listeners to board elements safely
    console.log("🔧 [Panel] Found", boards.length, "board elements");

    for (let i = 0; i < boards.length; i++) {
      // Check if the board element exists before adding event listener
      if (boards[i]) {
        boards[i].addEventListener("click", function () {
          let j = 0;
          while (j < boards.length) {
            // Add null checks for todoList and boards elements
            if (todoList[j]) {
              todoList[j].classList.remove("active");
            }
            if (boards[j]) {
              boards[j].classList.remove("active");
            }
            j++;
          }

          // Add null checks before manipulating elements
          if (boards[i]) {
            boards[i].classList.add("active");
          }
          if (todoList[i]) {
            todoList[i].classList.add("active");
          }
          if (boardName && boards[i]?.querySelector("h2")) {
            boardName.innerText = boards[i].querySelector("h2").innerText;
          }
        })
      } else {
        console.warn("🐛 [Panel] Board element at index", i, "is undefined");
      }
    }
  })


  useEffect(() => {
    const element: any = document.querySelector(".board");
    if (element) {
      element.classList.add("active");
      console.log("🔧 [Panel] Added active class to first board element");
    } else {
      console.warn("🐛 [Panel] No .board element found");
    }

    const todoListElements: any = document.querySelectorAll(".todo-lists");
    if (todoListElements.length > 0) {
      const element2: any = todoListElements[0];
      if (element2) {
        element2.classList.add("active");
        console.log("🔧 [Panel] Added active class to first todo-lists element");
      }
    } else {
      console.warn("🐛 [Panel] No .todo-lists elements found");
    }
  })

  return (
    <nav style={{ display: "none" }}>
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
                </div>)
            })}
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
            <img src="/icon-light-theme.svg" alt="" className="light-theme" />
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