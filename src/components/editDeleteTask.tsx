import React from 'react';
import ReactDOM from 'react-dom';

export default function EditDeleteTask() {

  return (
    <div className="editDelete" id="editDeleteTask" style={{display: "none"}}>
      <div className="edit">Edit Task</div>
      <div className="delete">Delete Task</div>
    </div>
  )
}