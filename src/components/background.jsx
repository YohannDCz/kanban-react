import React from "react"
import ReactDOM from "react-dom";

function Background() {
  return (
    <div className="background">
      <div className="description">
        <div className="text">This board is empty. Create a new column to get started.</div>
        <button>+ Add New Column</button>
      </div>
    </div>
  )
}

export default Background