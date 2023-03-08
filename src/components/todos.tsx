import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Background from './background';
import { handleClickAddTask } from './header';


export function Todos() {
  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });

  // const [i, setI] = useState(-1);
  // const [color, setColor] = useState(["#621708", "#49C4E5", "#8471F2", "#67E2AE", "#FFDD4A", "#D65108", "#FF5964", "#ED1D7A"])
  // const main = document.querySelector("main");
  // const boardName = document.querySelector(".board-name")?.querySelector("h1")?.innerText;

  return (
    <main>
      {data.boards.map((board: any) => 
      <div className={'todo-lists ' + board.name}>
        {board.columns.map((column: any) =>
          <div className={'todo-list ' + column.name}>
            <div className='todo-title'>
              <div className="todo-color"></div>
              <h1>{column.name} ({column.tasks.length})</h1>
            </div>
            <div className="cards">
              {column.tasks.map((task: any) =>
                <div className={"card " + task.title.replace(/\s/g, '')} onClick={handleClickAddTask}>
                  <h2>{task.title}</h2>
                  <h3>{task.subtasks.filter((subtask: any) => subtask.isCompleted === true ).length} of {task.subtasks.length} subtasks</h3>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      )}
    </main>
  )
}
