import React, { Component } from 'react';
import Card from '../../components/Card';
import { deleteCard, showModal } from '../../actions';
import { connect } from 'react-redux';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
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
              assigned_id={card.assigned_to.id}
              created_id={card.created_by.id}
              status_id={card.statuses.id}
              priority_id={card.priorities.id}
              priority={card.priorities.name}
            />
            <button value={card.id} onClick={this.handleDelete}>
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
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    },
    showModal: (id) => {
      dispatch(showModal(id));
    },
  };
};

// passes redux state to component properties
CardList = connect(
  null,
  mapDispatchToProps,
)(CardList);

export default CardList;
