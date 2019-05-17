import React, { Component } from 'react';
import Card from '../../components/Card';

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardList = this.props.cards.map((card, index) => {
      return <Card key={index} title={card.title} body={card.body} />;
    });

    return <>{cardList}</>;
  }
}

export default CardList;
