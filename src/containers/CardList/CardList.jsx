import React, { Component } from 'react';
import Card from '../../components/Card';

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('****CardList props:', this.props);
    const cardList = this.props.cards
      .filter((card) => {
        return card.status_id === this.props.status;
      })
      .map((card, idx) => {
        return <Card key={idx} title={card.title} body={card.body} />;
      });

    return <>{cardList}</>;
  }
}

export default CardList;
