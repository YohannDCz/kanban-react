import React from "react";
import ReactDOM from "react-dom";

interface IProps {
}

interface IState {
  num: number;
  data: any;
}

class Panel extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {num : 0, data: ""};
    // this.boards = this.boards.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch('/src/data.json');
      const result = await response.json();
      this.setState({
        num: result.boards.length,
        data: result.boards});
    } catch(err) {
      console.log(err)
    }
  }

  
  

  componentDidUpdate() {
    const boards: any = document.querySelectorAll(".board1");
    const boardName: any = document.querySelector(".board-name")?.querySelector("h1");

    for (let i = 0; i < boards.length; i++) {
      boards[i].addEventListener("click", function (e) {
        let j = 0;
        while (j < boards.length) {
          boards[j++].className = "board board1";
        }
        boards[i].className = "board board1 active";
        boardName.innerText = boards[i].querySelector("h2").innerText
      })
    }
    const element: any = document.querySelector(".board");
    ReactDOM.findDOMNode(element).className = "board board1 active"
  } 

  render() {
    let board1 = []
    for (let i = 0; i < this.state.data.length; i++) {
        board1.push(
          <div key={i} className="board board1">
            <img src="/icon-board.svg" alt="" className="board-icon" />
            <h2 className="sub-title">{this.state.data[i].name}</h2>
          </div>
    )};
    return (
      <nav style={{display: "none"}}>
        <div className="filter"></div>
        <div className="panel">
            <div className="all-boards">
              <h1 className="title">All Boards ({this.state.num})</h1>
              <div className="boards">{board1}</div>
              <div className="addBoards">
                <div className="board">
                  <img src="/icon-board.svg" alt="" className="board-icon-purple" />
                  <h2 className="sub-title">+ Create New Board</h2>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <div className="night-shift">
                <img src="/icon-light-theme.svg" alt="" className="light-theme"/>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <img src="/icon-dark-theme.svg" alt="" className="dark-theme" />
              </div>
              <div className="hide">
                <img src="/icon-hide-sidebar.svg" alt="" className="eye" />
                <p>Hide Sidebar</p>
              </div>
            </div>
        </div>
      </nav>
    )
  }
} 




export default Panel