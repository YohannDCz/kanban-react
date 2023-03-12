import React from "react"
import { ReactDOM } from "react"


export function TodoCard(props: any) {
  
  let task = props.task;
  let tasks = props.tasks;

  localStorage.setItem("tasks", JSON.stringify(tasks));
  let index = props.index;

  return (
    <div className={"card " + task.title.replace(/\s/g, '')} onClick={props.handleClickAddTask}>
      <h2>{task.title}</h2>
      <h3>{task.subtasks.filter((subtask: any) => subtask.isCompleted === true ).length} of {props.task.subtasks.length} subtasks</h3>
    </div>
  )
}
