import React, { useState } from "react"
import ReactDOM from "react-dom";
import Panel from "./panel"

export const handleClickHeader = (e: any) => {
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
  const main: any = document.querySelector("main");
  const background: any = document.querySelector(".background");

  if (menu.style.display === "none") {
    menu.style.display = "flex";
    downchevron.style.transform = "rotate(180deg)";
    show.style.display = "none";
    if (width >= 620) {
      main.style.transform = "translateX(260px)";
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
      main.style.transform = "translateX(0)";
      background.style.transform = "translateX(0px)";
      background.style.width = "100vw";
    } else if (width < 620) {
      document.body.style.overflow = "auto";
    }
  }
}

function Header() {
  const [background, setBackground] = useState("#635FC7");
  
  const displayShow = () => {
    const width: number = window.innerWidth;
    const show: any = document.querySelector(".show");
    
    if (width < 620) {
      show.style.display = "none";
    }
  }
  window.addEventListener("resize", displayShow);
  return (
    <header onChange={displayShow}>
      <div className="header"></div>
      <div className="left-info"> 
        <div className="box1">
          <img src="/logo-mobile.svg" alt="The logo of the brand." className="logo" />
        </div>
        <div className="box2">
          <img src="/logo-dark.svg" alt="" className="logotype" />
        </div>
        <Panel />
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
            <button className="addTask" style={{backgroundColor: background}}>
              <img src="/icon-add-task-mobile.svg" alt="Plus" className="plus" />
              <p className="addNewTask">+ Add New Task</p>
            </button>
            <img src="/icon-vertical-ellipsis.svg" alt="Drop down menu." />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header