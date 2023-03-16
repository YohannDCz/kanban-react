import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { handleClickTask } from './header';
import EditDeleteTask from './editDeleteTask';

export default function Task(props: any) {

  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });

  const [indexes, setIndexes] = useState(() => {
    const saved: any = localStorage.getItem("indexes");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  })

  useEffect(() => {
    const saved: any = localStorage.getItem("indexes");
    const initialValue: any = JSON.parse(saved);
    setIndexes(initialValue || "");
  })

  const [task, setTask] = useState(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);
  const [columns, setColumns] = useState(data?.boards[indexes.boardIndex]?.columns)
  ;
  useEffect(() => {
    setTask(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);
    setColumns(data?.boards[indexes.boardIndex]?.columns)
  })

  const options: any = document.querySelector(".options");
  function displayShow() {
      if (options?.style.display === "none") {
        options.style.display = "block";
      } else if (options?.style.display === "block") {
        options.style.display = "none";
      }
    }

    
  useEffect(() => {
    const subtasks: any = document.querySelectorAll(".subtask1");
    subtasks?.forEach((subtask: any) => {
      const checkbox: any = subtask?.querySelector(".checkbox");
      subtask.onmouseover = () => {
        if (checkbox?.checked === false) {
          subtask.style.backgroundColor = "rgba(99, 95, 199, 0.25)";
        }
      }

      subtask.onmouseout = () => {
        if (subtask?.style.backgroundColor === "rgba(99, 95, 199, 0.25)") {
          subtask.style.backgroundColor = "var(--clr-l-2)"
        }
      }
    })
  })

  const handleClickEditTask = () => {
    const editDelete: any = document.querySelector("#editDeleteTask");

    if (editDelete?.style.display === "none") {
      editDelete.style.display = "flex";
    } else if (editDelete?.style.display === "flex") {
      editDelete.style.display = "none";
    }
  }
  return (
    <section className='task' style={{display: "none"}}>
      <div className="filter3" onClick={handleClickTask}></div>
      <div className="taskPanel">
        <div className="box">
          <div className="up-info">
            <h2 className="title">{task?.title}</h2>
            <img src="/icon-vertical-ellipsis.svg" alt="The menu." onClick={handleClickEditTask}/>
            <EditDeleteTask />
          </div>
          <h3 className="description">{task?.description}</h3>
          <div className="subtasks">
            <h3 className="title">Subtasks ({task?.subtasks.filter((subtask: any) => subtask.isCompleted === "true").length} of {task?.subtasks.length})</h3>
            {task?.subtasks.map((subtask: any, index: any) => 
              <div className="subtask1">
                <input type="checkbox" className="checkbox" id={"checkbox" + index} />
                <label htmlFor={"checkbox" + index}>{subtask?.title}</label>
              </div>
            )}
          </div>
          <div className="status">
            <h3 className="title">Current Status</h3>
            <div className="selected" onClick={displayShow}>
              <h3>{task?.status}</h3>
              <img src="/icon-chevron-down.svg" alt="The down chevron" />
            </div>
            <div className="options" style={{display: "none"}}>
              {columns?.map((column: any, index: any) =>
                <h3 className={'state state' + index} onClick={displayShow}>{column.name}</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}