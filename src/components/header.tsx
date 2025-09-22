import { useEffect, useState } from "react";
import EditDeleteBoard from "./editDeleteBoard";
import Panel from "./panel";


export const handleClickAddTask = (e: any) => {
  const addTask: any = document.querySelector(".addTask");
  const h2 = addTask.querySelector("h2");


  if (addTask.style.display === "none") {
    addTask.style.display = "flex";
  } else if (addTask.style.display === "flex") {
    addTask.style.display = "none";
  }
}

export const handleClickTask = (e: any) => {

  const taskPanel: any = document.querySelector(".task");
  const header: any = document.querySelector("header");
  const addTask: any = document.querySelector(".addTask");
  const editTask: any = document.querySelector(".editTask");

  const task = e.currentTarget
  const column = task.parentElement.parentElement;
  const board = column.parentElement;
  const indexes = {
    taskIndex: task.id,
    columnIndex: column.id,
    boardIndex: board.id
  }

  localStorage.setItem('indexes', JSON.stringify(indexes));

  if (taskPanel.style.display === "none") {
    if (addTask.style.display === "none" && editTask.style.display === "none") {
      taskPanel.style.display = "flex";
    } else if (addTask.style.display === "flex" || editTask.style.display === "flex") {
      addTask.style.display = "none";
      editTask.style.display = "none";
    }
    header.style.position = "relative";
  } else if (taskPanel.style.display === "flex") {
    if (addTask.style.display === "none" && editTask.style.display === "none") {
      taskPanel.style.display = 'none';
    }
    header.style.position = "sticky";
  }


}

export const handleClickEditBoard = (e: any) => {
  const editBoard: any = document.querySelector(".editBoard");
  const header: any = document.querySelector("header");
  const panel: any = document.querySelector("nav");
  const downchevron: any = document.querySelector('.downchevron');
  const width: number = window.innerWidth;


  if (editBoard.style.display === "none") {
    editBoard.style.display = "flex"
    if (width < 620) {
      header.style.position = "relative";
      panel.style.display = "none";
      downchevron.style.transform = "rotate(0deg)";
      document.body.style.overflow = "auto";
    }
  } else if (editBoard.style.display === "flex") {
    editBoard.style.display = "none";
    header.style.position = "sticky";
  }
}

export const handleClickAddBoard = (e: any) => {
  const addBoard: any = document.querySelector(".addBoard");
  const header: any = document.querySelector("header");
  const panel: any = document.querySelector("nav");
  const downchevron: any = document.querySelector('.downchevron');
  const width: number = window.innerWidth;


  if (addBoard.style.display === "none") {
    addBoard.style.display = "flex"
    if (width < 620) {
      header.style.position = "relative";
      panel.style.display = "none";
      downchevron.style.transform = "rotate(0deg)";
      document.body.style.overflow = "auto";
    }
  } else if (addBoard.style.display === "flex") {
    addBoard.style.display = "none";
    header.style.position = "sticky";
  }
}

function Header(props: any) {
  const [background, setBackground] = useState("#635FC7");
  const [tasks, setTasks] = useState(document.querySelectorAll(".card"));

  useEffect(() => {
    tasks.forEach((task) => task.addEventListener("click", handleClickTask));
    return () => tasks.forEach((task) => task.removeEventListener("click", handleClickTask));
  })
  
  const handleClickHeader = () => {

    const menu: any = document.querySelector('nav')
    const downchevron: any = document.querySelector('.downchevron');
    const show: any = document.querySelector(".show");
    const width: number = window.innerWidth;
    const todos: any = document.querySelectorAll(".todo-lists");
    const background: any = document.querySelector(".background");

    if (menu.style.display === "none") {
      menu.style.display = "flex";
      downchevron.style.transform = "rotate(180deg)";
      show.style.display = "none";
      if (width >= 620) {
        todos.forEach((todo:any) => todo.style.transform = "translateX(260px)");
        background.style.transform = "translateX(260px)";
        background.style.width = "calc(100vw - 260px)";
      } else if (width < 620) {
        document.body.style.overflow = "hidden";
      }
    } else if (menu.style.display === "flex") {
      menu.style.display = "none";
      downchevron.style.transform = "rotate(0deg)";
      if (width >= 620) {
        show.style.display = "flex";
        todos.forEach((todo:any) => todo.style.transform = "translateX(0)")
        background.style.transform = "translateX(0px)";
        background.style.width = "100vw";
      } else if (width < 620) {
        document.body.style.overflow = "auto";
      }
    }
  }

  const displayShow1 = () => {
    const width: number = window.innerWidth;
    const show: any = document.querySelector(".show");
    const menu: any = document.querySelector("nav")
    const todos: any = document.querySelector(".todo-lists");

    if (width < 620) {
      if (show) show.style.display = "none";
    } else if (width >= 620) {
      if (menu?.style.display === "flex" && todos) {
        todos.style.transform = "translateX(260px)";
      }
    }
  }

  window.addEventListener("resize", displayShow1);

  const handleClickEditBoard = () => {
    const editDelete: any = document.querySelector("#editDeleteBoard");

    if (editDelete?.style.display === "none") {
      editDelete.style.display = "flex";
    } else if (editDelete?.style.display === "flex") {
      editDelete.style.display = "none";
    }
  }
  
  return (
    <header>
      <div className="header"></div>
      <div className="left-info"> 
        <div className="box1">
          <img src="/logo-mobile.svg" alt="The logo of the brand." className="logo" />
        </div>
        <div className="box2">
          <img src="/logo-dark.svg" alt="" className="logotype" />
        </div>
        <Panel handleClickAddBoard={handleClickAddBoard} handleClickHeader={handleClickHeader} />
        <div className="show" onClick={handleClickHeader}>
          <img src="/icon-show-sidebar.svg" alt="" className="eye-open" />
        </div>
      </div>
      <div className="right-info">
        <div className="container">
          <div className="board-name" onClick={handleClickHeader}>
            <h1>Platform Launch</h1>
            <img src="/icon-chevron-down.svg" alt="The down chevron." className="downchevron"/>
          </div>
          <div className="rightright-info">
            <button className="addTasks" onClick={handleClickAddTask} style={{backgroundColor: background}}>
              <img src="/icon-add-task-mobile.svg" alt="Plus" className="plus" />
              <h2 className="addNewTask">+ Add New Task</h2>
            </button>
            <img className="editBoards" src="/icon-vertical-ellipsis.svg" alt="Drop down menu." onClick={handleClickEditBoard}/>
            <EditDeleteBoard />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header