import React, { Component } from 'react';
import EditCard from '../../containers/EditCard';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ showModal: true });
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
        {this.state.showModal ? <EditCard {...this.props} /> : null}
      </div>
    );
  }
}

export default Card;
