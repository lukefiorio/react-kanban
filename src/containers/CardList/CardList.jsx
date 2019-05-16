import React, { Component } from 'react';
import Card from '../../components/Card';

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const cardList = this.props.cards.map((card, idx) => {
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
    return <>{cardList}</>;
  }
}

export default CardList;
