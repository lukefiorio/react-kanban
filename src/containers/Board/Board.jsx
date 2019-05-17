import React, { Component } from 'react';
import Column from '../../components/Column';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Column cards={this.props.cards} status={1} />
        <Column cards={this.props.cards} status={2} />
        <Column cards={this.props.cards} status={3} />
      </>
    );
  }

  // render() {
  //   return (
  //     <div className="card-container">
  //       <div className="cardToDo-container">
  //         <h3>To-Do</h3>
  //         <Column cards={this.props.cards} status={1} />
  //       </div>
  //       <div className="cardInProgress-container">
  //         <h3>In Progres</h3>
  //         <Column cards={this.props.cards} status={2} />
  //       </div>
  //       <div className="cardDone-container">
  //         <h3>Done</h3>
  //         <Column cards={this.props.cards} status={3} />
  //       </div>
  //     </div>
  //   );
  // }
}

export default Board;
