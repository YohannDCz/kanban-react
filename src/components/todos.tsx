import React from 'react';
import ReactDOM from 'react-dom';

interface IProps {
}

interface IState {
  data: any;
  colors: object;
}

export class Todos extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { data: [], colors: ["#49C4E5", "#8471F2", "#67E2AE"]};
  }

  async componentDidMount() {
    try {
      const response = await fetch('/src/data.json');
      const result = await response.json();
      this.setState({
        data: result.boards});
    } catch(err) {
      console.log(err)
    }    
  }

  componentDidUpdate() {
    const main = document.querySelector("main");
    const boardName = document.querySelector(".board-name")?.querySelector("h1")?.innerText;
  } 

  render () {
    return (
      <main>
        <div className='todo-list todo'>
          <div className='todo-title'>
            <div className="todo-color"></div>
            <h1>To do (4)</h1>
          </div>
          <div className="cards">
            <div className="card">
              <h2>Build UI for onboarding flow</h2>
              <h3>0 of 3 substasks</h3>
            </div>
            <div className="card">
              <h2>Build UI for search</h2>
              <h3>0 of 1 substasks</h3>
            </div>
            <div className="card">
              <h2>Build settings UI</h2>
              <h3>0 of 2 substasks</h3>
            </div>
            <div className="card">
              <h2>QA and test all major user journeys</h2>
              <h3>0 of 2 substasks</h3>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
