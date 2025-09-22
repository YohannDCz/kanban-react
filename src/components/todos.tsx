import { useEffect, useState } from 'react';
import { handleClickTask } from './header';
import { TodoCard } from './todocard';

export function Todos(props: any) {
  // Default data structure to prevent undefined errors
  const defaultData = { boards: [] };

  const [data, setData] = useState(() => {
    const saved: any = localStorage.getItem("data");
    if (!saved) return defaultData;
    try {
      const initialValue: any = JSON.parse(saved);
      return initialValue?.boards ? initialValue : defaultData;
    } catch (error) {
      console.error("🐛 [Todos] Error parsing localStorage data:", error);
      console.log("🔧 [Todos] Using default data structure for boards");
      return defaultData;
    }
  });

  const [color, setColor] = useState(["#49C4E5", "#8471F2", "#67E2AE", "#FFDD4A", "#D65108", "#FF5964", "#ED1D7A", "#621708"])

  useEffect(() =>
    setData(() => {
      const saved: any = localStorage.getItem("data");
      if (!saved) return defaultData;
      try {
        const initialValue: any = JSON.parse(saved);
        return initialValue?.boards ? initialValue : defaultData;
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return defaultData;
      }
    })
  )
  // const newColumn = () => {
  //   const newBoard = document.querySelector(".newBoard");
  //   const columns = document.querySelector(".")
  //   // newBoard.style.display = flex;

  // } 

  return (
    <main>
      {data?.boards?.map((board: any, index1: any) =>
        <div key={index1} id={index1} className={'todo-lists ' + (board?.name || 'untitled')}>
          {board?.columns?.map((column: any, index2: any) =>
            <div key={index2} id={index2} className={'todo-list ' + (column?.name || 'untitled')}>
              <div className='todo-title'>
                <div className="todo-color" style={{ backgroundColor: color[index2] || '#635FC7' }}></div>
                <h1>{column?.name || 'Untitled'} ({column?.tasks?.length || 0})</h1>
              </div>
              <div className="cards">
                {column?.tasks?.map((task: any, index3: any) =>
                  <TodoCard key={index3} id={index3} task={task} tasks={column.tasks} handleClickTask={handleClickTask} />
                )}
              </div>
            </div>
          )}
          <div className='todo-list'>
            <div className='todo-title'>
            </div>
            <div className='cards add-column'>
              <p>+ New Column</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
