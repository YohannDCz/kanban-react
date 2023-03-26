import React from 'react';
import ReactDOM from 'react-dom';

export default function EditDeleteTask() {

  const showEditTask = (e) => {
    const task: any = document.querySelector(".task");
    const newTask: any = document.querySelector(".newTask");
    const editDelete: any = document.querySelector("#editDeleteTask");

    if (task?.style.display === "flex") {
      task.style.display = "none";
      newTask.style.display = "flex";
      editDelete.style.display = "none";
    }
  }
  return (
    <div className="editDelete" id="editDeleteTask" style={{display: "none"}}>
      <div className="edit" onClick={showEditTask}>Edit Task</div>
      <div className="delete" onClick={showEditTask}>Delete Task</div>
    </div>
  )
}