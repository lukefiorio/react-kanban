import React, { Component } from 'react';
import Card from '../../components/Card';
import { deleteCard } from '../../actions';
import { connect } from 'react-redux';

class CardList extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   id: '',
    // };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteCard(e.target.value);

    // this.setState(
    //   {
    //     id: e.target.value,
    //   },
    //   () => console.log(this.state.id),
    //   this.props.deleteCard(this.state.id),
    // );
    // const { id } = this.state;

    // pass deleteCard() to dispatchToProps;
    // this.props.deleteCard(id);
  }

  render() {
    // console.log('****CardList props:', this.props);
    const cardList = this.props.cards
      .filter((card) => {
        return parseInt(card.status_id) === this.props.status;
      })
      .map((card, idx) => {
        return (
          <div id={card.id}>
            <Card key={idx} id={card.id} title={card.title} body={card.body} />
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
      // dispatch(addCard(card));
    },
  };
};

// passes redux state to component properties
CardList = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(CardList);

// export default DeleteCard;
export default CardList;
