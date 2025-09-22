import { useEffect, useState } from 'react';

export default function DeleteTask() {
  // Default data structures to prevent undefined errors
  const defaultData = { boards: [] };
  const defaultIndexes = { boardIndex: 0, columnIndex: 0, taskIndex: 0 };
  
  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    if (!saved) return defaultData;
    try {
      const initialValue: any = JSON.parse(saved);
      return initialValue?.boards ? initialValue : defaultData;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return defaultData;
    }
  });

  const [indexes, setIndexes] = useState(() => {
    const saved: any = localStorage.getItem("indexes");
    if (!saved) return defaultIndexes;
    try {
      const initialValue: any = JSON.parse(saved);
      return initialValue || defaultIndexes;
    } catch (error) {
      console.error("Error parsing localStorage indexes:", error);
      return defaultIndexes;
    }
  })

  useEffect(() => {
      const saved: any = localStorage.getItem("indexes");
      if (saved) {
        try {
          const initialValue: any = JSON.parse(saved);
          setIndexes(initialValue || defaultIndexes);
        } catch (error) {
          console.error("Error parsing localStorage indexes:", error);
          setIndexes(defaultIndexes);
        }
      }
  })

  const [task, setTask] = useState(data?.boards?.[indexes?.boardIndex]?.columns?.[indexes?.columnIndex]?.tasks?.[indexes?.taskIndex] || null);

  useEffect(() => {
    const settask = () => setTask(data?.boards?.[indexes?.boardIndex]?.columns?.[indexes?.columnIndex]?.tasks?.[indexes?.taskIndex] || null);
    settask()
  }, [data?.boards?.[indexes?.boardIndex]?.columns?.[indexes?.columnIndex]?.tasks?.[indexes?.taskIndex]]);
  
  
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
            Are you sure you want to delete the '<span id="taskTitle">{task?.title || 'Untitled Task'}</span>' task and its subtasks? This action cannot be reversed.
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