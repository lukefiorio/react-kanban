import React, { Component } from 'react';
import Card from '../../components/Card';

class CardDone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const cardDone = this.props.cards
      .filter((card) => {
        // cards that are 'done'
        return card.status_id === 3;
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
    return <>{cardDone}</>;
  }
}

export default CardDone;
