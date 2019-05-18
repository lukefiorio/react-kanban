import React, { Component } from 'react';
import Card from '../../components/Card';
import { deleteCard } from '../../actions';
import { connect } from 'react-redux';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteCard(e.target.value);
  }

  render() {
    const cardList = this.props.cards
      .filter((card) => {
        return parseInt(card.status_id) === this.props.status;
      })
      .map((card, idx) => {
        return (
          <div key={idx} className={`cardBox ${card.statuses.name}-cardBox`}>
            <Card
              id={card.id}
              title={card.title}
              body={card.body}
              assigned_to={card.assigned_to}
              priority={card.priorities.name}
            />
            <button value={card.id} onClick={this.handleSubmit}>
              Delete Card
            </button>
          </div>
        );
      });

    return <>{cardList}</>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // this first deleteCard is the one we get from this.props.deleteCard
    // in the handleSubmit(e) function
    deleteCard: (id) => {
      // THIS deleteCard (below) is the action we imported at top
      // id is the id we'll be passing in
      const deleteCardAction = deleteCard(id);
      dispatch(deleteCardAction);
    },
  };
};

// passes redux state to component properties
CardList = connect(
  null,
  mapDispatchToProps,
)(CardList);

export default CardList;
