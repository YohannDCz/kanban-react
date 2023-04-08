import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function DeleteTask() {
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
      setIndexes(initialValue || "")
  })

  const [task, setTask] = useState(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);

  useEffect(() => {
    const settask = () => setTask(data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]);
    settask()
  }, [data?.boards[indexes.boardIndex]?.columns[indexes.columnIndex]?.tasks[indexes.taskIndex]]);
  
  
  const showDeleteTask = () => {
    const deleteTask: any = document.querySelector("#deleteTask");
    if (deleteTask.style.display === "flex") {
      deleteTask.style.display = "none";
    }
  }

  const truncateText = (selector: string, maxLength: number) => {
    let element = document.querySelector(selector);
    if (element?.textContent) {
        let truncated = element.textContent.trim().split(" ").slice(0, maxLength).join(" ");
        if (element.textContent.trim().split(" ").length > maxLength) {
            truncated += "...";
        }
        element.textContent = truncated;
    }
  };

  truncateText("#taskTitle", 4);

  return (
    <div className="deleteTask" id="deleteTask" style={{display: "none"}}>
      <div className="filter4" onClick={showDeleteTask}></div>
      <div className="container">
        <div className="box">
          <h2>Delete this task?</h2>
          <div className="description">
            Are you sure you want to delete the '<span id="taskTitle">{task?.title}</span>' task and its subtasks? This action cannot be reversed.
          </div>
          <div className="buttons">
            <button className="deleteBoardButton">Delete</button>
            <button className="cancelBoardButton">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}