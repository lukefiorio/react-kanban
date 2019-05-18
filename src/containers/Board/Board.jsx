import React, { Component } from 'react';
import Column from '../../components/Column';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.statuses);
    const columnList = this.props.statuses.map((status, idx) => {
      return (
        <div key={idx} className="columnBox" id={status.name}>
          <Column cards={this.props.cards} status={status.id} status_name={status.name} />
        </div>
      );
    });

    return <div className="column-container">{columnList}</div>;
  }

  // <div key={idx} className="columnBox" id={status.name}></div>

  // render() {
  //   return (
  //     <div className="card-container">
  //       <div className="cardToDo-container">
  //         <h3>To-Do</h3>
  //         <Column idx={1} cards={this.props.cards} status={1} />
  //       </div>
  //       <div className="cardInProgress-container">
  //         <h3>In Progres</h3>
  //         <Column idx={2} cards={this.props.cards} status={2} />
  //       </div>
  //       <div className="cardDone-container">
  //         <h3>Done</h3>
  //         <Column idx={3} cards={this.props.cards} status={3} />
  //       </div>
  //     </div>
  //   );
  // }
}

export default Board;
