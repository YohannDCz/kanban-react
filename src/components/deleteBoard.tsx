import { useEffect, useState } from 'react';

export default function DeleteBoard() {
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
    const setindexes = () => {
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
    }
    setindexes()
  }, [localStorage.getItem("indexes")])

  const [board, setBoard] = useState(0);

  useEffect(() => {
    const setboard = () => {
      const activeElement = document.querySelector(".active");
      setBoard(activeElement?.id ? Number(activeElement.id) : 0);
    };
    setboard();
  }, []);
  
  const showDeleteBoard = () => {
    const deleteBoard: any = document.querySelector("#deleteBoard");
    if (deleteBoard.style.display === "flex") {
      deleteBoard.style.display = "none";
    }
  }

  return (
    <div className="deleteBoard" id="deleteBoard" style={{display: "none"}}>
      <div className="filter4" onClick={showDeleteBoard}></div>
      <div className="container">
        <div className="box">
          <h2>Delete this board?</h2>
          <div className="description">
            Are you sure you want to delete the '{data?.boards?.[board]?.name || 'Untitled Board'}' board? This action will remove all columns and tasks and cannot be reversed.
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