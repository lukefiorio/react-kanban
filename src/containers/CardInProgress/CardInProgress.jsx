import React, { Component } from 'react';
import Card from '../../components/Card';

class CardInProgress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardInProgress = this.props.cards
      .filter((card) => {
        // cards 'in-progress';
        return card.status_id === 2;
      })
      .map((card, idx) => {
        return (
          <Card
            key={idx}
            title={card.title}
            body={card.body}
            // priority_id={card.priority_id}
            // status_id={card.status_id}
            // created_by={card.created_by}
            // assigned_to={card.assigned_to}
          />
        );
      });
    return <>{cardInProgress}</>;
  }
}

export default CardInProgress;
