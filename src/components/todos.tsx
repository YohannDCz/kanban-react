import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Background from './background';
import { handleClickTask } from './header';
import { AddTask } from './addTask';
import { TodoCard } from './todocard';

export function Todos(props: any) {
  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });

  const [color, setColor] = useState(["#49C4E5", "#8471F2", "#67E2AE", "#FFDD4A", "#D65108", "#FF5964", "#ED1D7A", "#621708"])

  // const newColumn = () => {
  //   const newBoard = document.querySelector(".newBoard");
  //   const columns = document.querySelector(".")
  //   // newBoard.style.display = flex;

  // } 
  
  return (
    <main>
      {data.boards.map((board: any, index1: any) => 
      <div key={index1} id={index1} className={'todo-lists ' + board.name}>
        {board.columns.map((column: any, index2: any) =>
          <div key={index2} id={index2} className={'todo-list ' + column.name}>
            <div className='todo-title'>
              <div className="todo-color" style={{backgroundColor: color[index2]}}></div>
              <h1>{column.name} ({column.tasks.length})</h1>
            </div>
            <div className="cards">
              {column.tasks.map((task: any, index3: any) =>
                <TodoCard key={index3} id={index3} task={task} tasks={column.tasks} handleClickTask={handleClickTask}/>
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
