import React, { Component } from 'react';
import Card from '../../components/Card';

class CardToDo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const cardToDo = this.props.cards
      .filter((card) => {
        return card.status_id === 1;
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
    return <>{cardToDo}</>;
  }
}

export default CardToDo;
