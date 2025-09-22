import { useEffect, useState } from "react";
import { handleClickEditBoard } from "./header";

export function EditBoard(props: any) {
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

  const [board, setBoard] = useState(() => {
    const activeElement = document.querySelector(".active");
    return activeElement?.id ? Number(activeElement.id) : 0;
  });

  useEffect(() => {
    const activeElement = document.querySelector(".active");
    setBoard(activeElement?.id ? Number(activeElement.id) : 0);
  });

  const [name, setName] = useState('');
  const [columns, setColumns] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  const [boards, setBoards] = useState<string[]>([]);

  const handleAddBoard = (event: any) => {
    event.preventDefault();
    const nextIndex = boards.length;
    setBoards([...boards, `board ${nextIndex + 1}`]);
  }

  function handleBoardChange(e: any, index: any) {
    const newBoards = [...boards];
    newBoards[index] = e.target.value;
    setBoards(newBoards);
    e.target.style.border = "1px solid var(--clr-d-6)";
    e.target.parentNode.querySelector("img").src = "/icon-cross.svg";
    e.target.parentNode.querySelector("p").style.display = "none";
    console.log("🔧 [EditBoard] Board column value changed:", e.target.value);
  }

  const deleteBoard = (e: any) => {
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
    <section className="editBoard" style={{ display: "none" }}>
      <div className="filter2" onClick={handleClickEditBoard}></div>
      <div className="board">
        <div className="box">
          <form id="editTaskForm">
            <h2>Edit Board</h2>
            <div className="title">
              <label htmlFor="title">Board Name</label>
              <input id="title" type="text" defaultValue={data?.boards?.[board]?.name || ''} />
            </div>
            <div className="columns">
              <label htmlFor="button column1 column2 column3 column4 column5">Board Columns</label>
              {data?.boards?.[board]?.columns?.map((column: any, index: any) => {
                return (
                  <div id={index} key={index} className="column">
                    <input type="text" defaultValue={column?.name || ''} placeholder="e.g.Todo" />
                    <img src="/icon-cross.svg" alt="The cross icon." className="cross" />
                  </div>
                )
              })}
              {boards.map((board, index) => (
                <div key={index} className={`column column${index}"`}>
                  <input type="text" placeholder="e.g. Todo" onChange={(event) => handleBoardChange(event, index)} />
                  <img src="/icon-cross.svg" alt="The cross icon." className="cross" onClick={deleteBoard} />
                  <p style={{ display: "none" }}>Can't be empty</p>
                </div>
              ))}
              <button id="button" onClick={(event) => handleAddBoard(event)}>+ Add New Column</button>
            </div>
          </form>
          <button type="submit" form="editTaskForm" value="SubmitNewBoard">Save Changes</button>
        </div>
      </div>
    </section>
  )
}