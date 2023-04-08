import React, { useState, useEffect } from "react"
import { ReactDOM } from "react"
import { handleClickTask } from './header';


export function TodoCard(props: any) {
  const [task, setTask] = useState(props.task);
  const [tasks, setTasks] = useState(props.tasks)

  localStorage.setItem("task", JSON.stringify(task));
  localStorage.setItem("tasks", JSON.stringify(tasks));

  return (
    <div id={props.id} className={"card " + props.task.title.replace(/\s/g, '')} onClick={handleClickTask}>
      <h2>{props.task.title}</h2>
      <h3>{props.task.subtasks.filter((subtask: any) => subtask.isCompleted === true ).length} of {props.task.subtasks.length} subtasks</h3>
    </div>
  )
}
