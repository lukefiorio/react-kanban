import React, { Component } from 'react';
import Column from '../../components/Column';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columnList = this.props.statuses.map((status, idx) => {
      return (
        <div key={idx} className="columnBox" id={status.name}>
          <Column
            cards={this.props.cards}
            users={this.props.users}
            priorities={this.props.priorities}
            statuses={this.props.statuses}
            status={status.id}
            status_name={status.name}
          />
        </div>
      );
    });

    return <div className="column-container">{columnList}</div>;
  }
}

export default Board;
