import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { handleClickTask } from "./header";


export function AddTask(props: any) {
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
  const [columns, setColumns] = useState(data?.boards[indexes.boardIndex]?.columns);
  const [board, setBoard] = useState(0);

  useEffect(() => {
    setTask(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);
    setColumns(data?.boards[indexes.boardIndex]?.columns);
    setBoard(() => {
      const activeId: any = document.querySelector(".board.board1.active")?.id
      return parseInt(activeId)});
  })

  useEffect(() => {
    const addTask: any = document.querySelector(".addTask");
    const filter: any = document.querySelector(".filter2");
    const panel: any = document.querySelector(".editTaskPanel");

    const panelHeight = panel.offsetHeight;

    if (panelHeight > window.innerHeight) {
      filter.style.height = panelHeight * 1.1 + "px"; 
      addTask.style.height = panelHeight * 1.1 + "px"; 
      document.body.style.overflow = "scroll";
    } else {
      filter.style.height = "100vh";
      addTask.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
  })

  const displayShow = (e: any) => {
    const options: any = e.target.nextElementSibling;
    if (options?.style.display === "none") {
      options.style.display = "block";
    } else if (options?.style.display === "block") {
      options.style.display = "none";
    }
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subtask1, setSubtask1] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();

  }

  const [subtasks, setSubtasks] = useState<string[]>([]);

  const handleAddSubtask = () => {
    const nextIndex = subtasks.length;
    setSubtasks([...subtasks, `subtask ${nextIndex + 1}`]);
  }

  function handleSubtaskChange(e: any, index: any) {
    const newSubtasks = [...subtasks];
    newSubtasks[index] = e.target.value;
    setSubtasks(newSubtasks);
    e.target.style.border = "1px solid var(--clr-d-6)";
    e.target.parentNode.querySelector("img").src = "/icon-cross.svg";
    e.target.parentNode.querySelector("p").style.display = "none";
    console.log(e.target.value);
  }

  const deleteSubtask = (e: any) => {
    if (e.target.previousElementSibling.value === "") {
      e.target.src = "/icon-cross-red.png";
      e.target.previousElementSibling.style.border = "1px solid var(--clr-p-1)"
      e.target.previousElementSibling.style.outline = "none";
      e.target.nextElementSibling.style.display = "flex";
    } else {
      e.target.parentElement.remove();
    }
  }
  
  return (
    <section className="addTask" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickTask}></div>
      <div className="editTaskPanel">
        <div className="box">
          <form id="editTaskForm" className="editTaskForm" onSubmit={handleSubmit}>
            <h2 id="addTask">Add Task</h2>
            <div className="title">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Take coffee break" />
            </div>
            <div className="Description">
              <label htmlFor="description">Description</label>
              <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />
            </div>
            <div className="subtasks">
              <label>Subtasks</label>
              {subtasks.map((subtask, index) => (
                <div key={index} className={`subtask subtask-${index}`}>
                  <input placeholder="e.g. Make coffee" onChange={(event) => handleSubtaskChange(event, index)}/>
                  <img src="/icon-cross.svg" alt="" className="cross" onClick={deleteSubtask} />
                  <p style={{display: "none"}}>Can't be empty</p>
                </div>
              ))}
              <button type="button" onClick={handleAddSubtask}>Add Subtask</button>
            </div>
            <div className="status">
              <h3 className="title">Current Status</h3>
              <div className="selected" onClick={displayShow}>
                <h3>{data?.boards[board]?.columns[0]?.name}</h3>
                <img src="/icon-chevron-down.svg" alt="The down chevron" />
              </div>
              <div className="options" style={{display: "none"}}>
                {data.boards[board]?.columns?.map((column: any, index: any) => {
                  return <h3 key={index} className={'state state' + index} onClick={displayShow}>{column?.name}</h3>
                })}
              </div>
            </div>
          <button type="submit" id="button" form="editTaskForm">Create Task</button>
          </form>
        </div>
      </div>
    </section>
  )
}