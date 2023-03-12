import React, { useEffect} from "react"
import { ReactDOM } from "react"


export function TodoCard(props: any) {
  
  const task: any = props.task;
  const tasks: any = props.tasks;

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [task, tasks])
  

  .getAttribute('key')

  return (
    <div className={"card " + props.task.title.replace(/\s/g, '')} onClick={props.handleClickAddTask}>
      <h2>{props.task.title}</h2>
      <h3>{props.task.subtasks.filter((subtask: any) => subtask.isCompleted === true ).length} of {task.subtasks.length} subtasks</h3>
    </div>
  )
}
