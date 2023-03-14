import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Background from './background';
import { handleClickAddTask } from './header';
import { NewTask } from './newTask';
import { TodoCard } from './todocard';

export function Todos(props: any) {
  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });

  // const [i, setI] = useState(-1);
  const [color, setColor] = useState(["#49C4E5", "#8471F2", "#67E2AE", "#FFDD4A", "#D65108", "#FF5964", "#ED1D7A", "#621708"])
  // const main = document.querySelector("main");
  // const boardName = document.querySelector(".board-name")?.querySelector("h1")?.innerText;
  return (
    <main>
      {data.boards.map((board: any, index1: any) => 
      <div id={index1} className={'todo-lists ' + board.name}>
        {board.columns.map((column: any, index2: any) =>
          <div id={index2} className={'todo-list ' + column.name}>
            <div className='todo-title'>
              <div className="todo-color" style={{backgroundColor: color[index2]}}></div>
              <h1>{column.name} ({column.tasks.length})</h1>
            </div>
            <div className="cards">
              {column.tasks.map((task: any, index3: any) =>
                <TodoCard id={index3} task={task} tasks={column.tasks} handleClickAddTask={handleClickAddTask}/>
              )}
            </div>
          </div>
        )}
        <div className='todo-list'>
          <div className='todo-title'>
          </div>
          <div className='cards add-column'>
            <p>+ New Column</p>
          </div>
        </div>
      </div>
      )}
    </main>
  )
}
