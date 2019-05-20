import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditCard from '../../containers/EditCard';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.handleEdit = this.handleEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  hideEdit(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="card">
        <div className="cardTitle">{this.props.title}</div>
        <div className="cardBody">{this.props.body}</div>
        <div className={`cardPriority ${this.props.priority}-cardPriority`}>Priority: {this.props.priority}</div>
        <div className="cardAssignedTo">
          Assigned to: {this.props.assigned_to.first_name} {this.props.assigned_to.last_name}
        </div>
        {/* <div>{created_by}</div> */}
        <button value={this.props.id} onClick={this.handleEdit}>
          Edit Card
        </button>
        {this.state.showModal ? (
          <div className="modal">
            <EditCard {...this.props} hideEdit={this.hideEdit} />{' '}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    cards: store.cards,
    users: store.users,
    priorities: store.priorities,
    statuses: store.statuses,
    showModal: store.showModal,
    // only if using multiple reducers
    // cards: state.cardReducer.cards,
  };
};

Card = connect(
  mapStateToProps,
  null,
)(Card);

export default Card;
