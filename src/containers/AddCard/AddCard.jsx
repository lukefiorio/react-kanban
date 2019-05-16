import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: '',
    };

    this.titleInputRef = createRef();

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCreatedChange = this.handleCreatedChange.bind(this);
    this.handleAssignedChange = this.handleAssignedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    const { value } = e.target;
    this.setState({ title: value });
  }

  handleBodyChange(e) {
    const { value } = e.target;
    this.setState({ body: value });
  }

  handlePriorityChange(e) {
    const { value } = e.target;
    this.setState({ priority_id: value });
  }

  handleStatusChange(e) {
    const { value } = e.target;
    this.setState({ status_id: value });
  }

  handleCreatedChange(e) {
    const { value } = e.target;
    this.setState({ created_by: value });
  }

  handleAssignedChange(e) {
    const { value } = e.target;
    this.setState({ assigned_to: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, body, priority_id, status_id, created_by, assigned_to } = this.state;
    console.log(title);
    // pass addCard() to dispatchToProps;
    this.props.addCard({
      title: title,
      body: body,
      priority_id: priority_id,
      status_id: status_id,
      created_by: created_by,
      assigned_to: assigned_to,
    });

    // resets back to empty string after card submission
    this.setState({
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: '',
    });

    // sets focus to title after submission
    this.titleInputRef.current.focus();
  }

  render() {
    return (
      <form>
        <input type="text" ref={this.titleInputRef} value={this.state.title} onChange={this.handleTitleChange} />
        <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
        <input type="text" value={this.state.priority_id} onChange={this.handlePriorityChange} />
        <input type="text" value={this.state.status_id} onChange={this.handleStatusChange} />
        <input type="text" value={this.state.created_by} onChange={this.handleCreatedChange} />
        <input type="text" value={this.state.assigned_to} onChange={this.handleAssignedChange} />
        <button onClick={this.handleSubmit}>Save Card</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispacthToProps = (dispatch) => {
  return {
    // this first addCard is the one we get from this.props.addBook
    // in the handleSubmit(e) function
    addCard: (card) => {
      // THIS addBook (below) is the action we imported at top
      // book is the newBook we'll be passing in
      const addCardAction = addCard(card);
      dispatch(addCardAction);
    },
  };
};

// passes redux state to component properties
AddCard = connect(
  mapStateToProps,
  mapDispacthToProps,
)(AddCard);

export default AddCard;
