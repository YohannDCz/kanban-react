import React from "react"
import ReactDOM from "react-dom";



function Header() {
  let background = "#635FC7";
  let num;

  fetch('http://localhost:5174/src/data.json')
    .then((text) => text.json())
    .then((data) => {num = data.boards.length});

  function handleClick(e) {
    fetch('http://localhost:5174/src/data.json')
        .then((text) => text.json())
        .then((data) => {
          let division = e.target.innerText;
          let index;
          let indexJSON = data.boards.find(function(item, i){
            if (item.name === division) {
              index = i;
            }
          });

          let isActive = !(data.boards[index].columns.length > 0);
          if (isActive) {
              background = "#A8A4FF";
          }
          
          const menu = document.querySelector('nav')

          if (menu.style.display === "none") {
          menu.style.display = "flex";
          } else {
            menu.style.display = "none";
          }
        })
  }

    return (
      <header>
        <div className="left-info"> 
          <img src="../../public/logo-mobile.svg" alt="The logo of the brand." className="logo" />
          <div className="board-name" onClick={handleClick}>
            <h1>Platform Launch</h1>
            <img src="../../public/icon-chevron-down.svg" alt="The down chevron." className="downchevron"/>
          </div>
        </div>
        <div className="right-info">
          <button className="addTask" style={{backgroundColor: background}}>
            <img src="../../public/icon-add-task-mobile.svg" alt="Plus" className="plus" />
            <p className="addNewTask">+ Add New Task</p>
          </button>
          <img src="../../public/icon-vertical-ellipsis.svg" alt="Drop down menu." />
        </div>
      </header>
    )
}

export default Header