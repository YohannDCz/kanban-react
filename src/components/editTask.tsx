import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { handleClickTask } from "./header";


export function EditTask(props: any) {
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
  const [subtasks, setSubtasks] = useState(task?.subtasks?.map((subtask: any) => ({title: subtask.title, isCompleted: false})));
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
    const editTask: any = document.querySelector(".editTask");
    const filter: any = document.querySelector(".filter2");
    const panel: any = document.querySelector(".editTaskPanel");

    const panelHeight = panel.offsetHeight;

    if (panelHeight > window.innerHeight) {
      filter.style.height = panelHeight * 1.1 + "px"; 
      editTask.style.height = panelHeight * 1.1 + "px"; 
      document.body.style.overflow = "scroll";
    } else {
      filter.style.height = "100vh";
      editTask.style.height = "100vh";
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
  const [subtasks1, setSubtasks1] = useState<string[]>([]);


  function handleSubmit(event: any) {
    event.preventDefault();

  }

  const handleAddSubtask = () => {
    const nextIndex = subtasks1.length;
    setSubtasks1([...subtasks1, `subtask ${nextIndex + 1}`]);
  }

  function handleSubtaskChange(e: any, index: any) {
    const newTask = { title: e.target.value, isCompleted: false };
    setSubtasks((prevSubtasks: any) => [...prevSubtasks, newTask]);
    e.target.style.border = "1px solid var(--clr-d-6)";
    e.target.parentNode.querySelector("img").src = "/icon-cross.svg";
    e.target.parentNode.querySelector("p").style.display = "none";
    console.log(subtasks)
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
    <section className="editTask" style={{display: "none"}}>
      <div className="filter2" onClick={handleClickTask}></div>
      <div className="editTaskPanel">
        <div className="box">
          <form id="taskForm" className="taskForm" onSubmit={handleSubmit}>
            <h2 id="editTask">Edit Task</h2>
            <div className="title">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" onChange={e => setTitle(e.target.value)} defaultValue={task?.title} placeholder="e.g. Take coffee break" />
            </div>
            <div className="Description">
              <label htmlFor="description">Description</label>
              <textarea id="description"value={description} onChange={e => setDescription(e.target.value)} placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />
            </div>
            <div className="subtasks">
              <label>Subtasks</label>
              {task?.subtasks?.map((subtask: any, index: number) => {
                return (<div key={index} className={`subtask subtask-${index}`}>
                    <input type="text" defaultValue={subtask?.title} placeholder="e.g. Make coffee" onChange={(event) => handleSubtaskChange(event, index)}/>
                    <img src="/icon-cross.svg" alt="" className="cross" onClick={deleteSubtask}/>
                    <p style={{display: "none"}}>Can't be empty</p>
                  </div>
                )
              })}
              {subtasks1.map((subtask, index) => (
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
          <button type="submit" id="button" form="taskForm">Edit Task</button>
          </form>
        </div>
      </div>
    </section>
  )
}