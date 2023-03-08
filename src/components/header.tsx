import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom";
import Panel from "./panel"

export const handleClickAddTask = (e: any) => {
  const saved: any = localStorage.getItem("data");
  const initialValue: any = JSON.parse(saved);
  const data = initialValue || "";

  const newTask: any = document.querySelector(".newTask");
  const header: any = document.querySelector("header");

  if (newTask.style.display === "none") {
    newTask.style.display = "flex"
    header.style.position = "relative";

  } else if (newTask.style.display === "flex") {
    newTask.style.display = "none";
    header.style.position = "sticky";

  }

  const taskForm: any = document.querySelector("#taskForm")?.querySelector("h2");
  if (e.target.parentElement.className === "addTasks") {
      taskForm.innerText = "Add Task";
  } else if (e.target.parentElement.className === "card" ||
             e.target.parentElement.className === "cards" ) {
    taskForm.innerText = "Edit Task";
  }
  // localStorage.setItem("targetTask", e.target.innerText.replace(/\s/g, ''));
}

export const handleClickAddBoard = (e: any) => {
  const newBoard: any = document.querySelector(".newBoard");
  const header: any = document.querySelector("header");
  const panel: any = document.querySelector("nav");
  const downchevron: any = document.querySelector('.downchevron');
  const width: number = window.innerWidth;


  if (newBoard.style.display === "none") {
    newBoard.style.display = "flex"
    if (width < 620) {
      header.style.position = "relative";
      panel.style.display = "none";
      downchevron.style.transform = "rotate(0deg)";
      document.body.style.overflow = "auto";
    }
  } else if (newBoard.style.display === "flex") {
    newBoard.style.display = "none";
    header.style.position = "sticky";
  }

  const boardForm: any = document.querySelector("#boardForm")?.querySelector("h2");
  if (e.target.parentElement.parentElement.className === "addBoards") {
    boardForm.innerText = "Add Board";
  } else if (e.target.className === "editBoards") {
    boardForm.innerText = "Edit Board";
  }
}

function Header(props: any) {
  const [background, setBackground] = useState("#635FC7");
  
  const handleClickHeader = () => {
    // fetch('/src/data.json')
    //   .then((text) => text.json())
    //   .then((data) => {
    //     let division = e.target.innerText;
    //     let index: any;
    //     let indexJSON = data.boards.find(function(item: any, i:number){
    //       if (item.name === division) {
    //         index = i;
    //       }
    //     });

    //     let isActive = !(data.boards[index].columns.length > 0);
    //     if (isActive) {
    //         setBackground("#A8A4FF");
    //     }

    const menu: any = document.querySelector('nav')
    const downchevron: any = document.querySelector('.downchevron');
    const show: any = document.querySelector(".show");
    const width: number = window.innerWidth;
    const todos: any = document.querySelectorAll(".todo-lists");
    const background: any = document.querySelector(".background");
    const newTask: any = document.querySelector(".newTask");

    if (menu.style.display === "none") {
      menu.style.display = "flex";
      downchevron.style.transform = "rotate(180deg)";
      show.style.display = "none";
      if (width >= 620) {
        todos.forEach((todo:any) => todo.style.transform = "translateX(260px)");
        background.style.transform = "translateX(260px)";
        background.style.width = "calc(100vw - 260px)";
        newTask.style.transform = "translateX(-260px)";
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
        newTask.style.transform = "translateX(0px)";
      } else if (width < 620) {
        document.body.style.overflow = "auto";
      }
    }
  }

  const displayShow = () => {
    const width: number = window.innerWidth;
    const show: any = document.querySelector(".show");
    const menu: any = document.querySelector("nav")
    const todos: any = document.querySelector(".todo-lists");

    if (width < 620) {
      show.style.display = "none";
    } else if (width >= 620) {
      if (menu.style.display === "flex") {
        todos.style.transform = "translateX(260px)";
      }
    }
  }

  window.addEventListener("resize", displayShow);
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
        <Panel handleClickAddBoard={handleClickAddBoard} handleClickAddTask={handleClickAddTask} handleClickHeader={handleClickHeader} />
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
            <img className="editBoards" src="/icon-vertical-ellipsis.svg" alt="Drop down menu." onClick={handleClickAddBoard}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header