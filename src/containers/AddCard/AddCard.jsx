import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addCard, loadCards, loadUsers, loadPriorities, loadStatuses } from '../../actions';
import UserDropDown from '../../components/UserDropDown';
import StatusDropDown from '../../components/StatusDropDown';
import PriorityDropDown from '../../components/PriorityDropDown';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority_id: 3,
      status_id: 1,
      created_by: 1,
      assigned_to: 1,
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

    // pass addCard() to dispatchToProps;
    this.props.addCard({
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to,
    });

    // resets back to empty string after card submission
    this.setState({
      title: '',
      body: '',
      priority_id: 3,
      status_id: 1,
      created_by: 1,
      assigned_to: 1,
    });

    // sets focus to title after submission
    this.titleInputRef.current.focus();
  }

  render() {
    const userDropDown = this.props.users.map((user, idx) => {
      return <UserDropDown key={idx} id={user.id} first_name={user.first_name} last_name={user.last_name} />;
    });

    const priorityDropDown = this.props.priorities.map((priority, idx) => {
      return <PriorityDropDown key={idx} id={priority.id} name={priority.name} />;
    });

    const statusDropDown = this.props.statuses.map((status, idx) => {
      return <StatusDropDown key={idx} id={status.id} name={status.name} />;
    });

    return (
      <form>
        <div className="formRow">
          <label>Title:</label>
          <input type="text" ref={this.titleInputRef} value={this.state.title} onChange={this.handleTitleChange} />
        </div>
        <div className="formRow">
          <label>Body:</label>
          <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
        </div>
        <div className="formRow">
          <label>Priority:</label>
          <select value={this.state.priority_id} onChange={this.handlePriorityChange}>
            {priorityDropDown}
          </select>
          {/* <input type="text" value={this.state.priority_id} onChange={this.handlePriorityChange} /> */}
        </div>
        <div className="formRow">
          <label>Status:</label>
          <select value={this.state.status_id} onChange={this.handleStatusChange}>
            {statusDropDown}
          </select>
          {/* <input type="text" value={this.state.status_id} onChange={this.handleStatusChange} /> */}
        </div>
        <div className="formRow">
          <label>Created By:</label>
          <select value={this.state.created_by} onChange={this.handleCreatedChange}>
            {userDropDown}
          </select>
        </div>
        <div className="formRow">
          <label>Assigned To:</label>
          <select value={this.state.assigned_to} onChange={this.handleAssignedChange}>
            {userDropDown}
          </select>
        </div>
        <button onClick={this.handleSubmit}>Save Card</button>
      </form>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    // this first addCard is the one we get from this.props.addBook
    // in the handleSubmit(e) function
    addCard: (card) => {
      // THIS addCard (below) is the action we imported at top
      // book is the newBook we'll be passing in
      const addCardAction = addCard(card);
      dispatch(addCardAction);
      // dispatch(addCard(card));
    },
    loadCards: () => {
      dispatch(loadCards());
    },
    loadUsers: () => {
      dispatch(loadUsers());
    },
    loadStatuses: () => {
      dispatch(loadStatuses());
    },
    loadPriorities: () => {
      dispatch(loadPriorities());
    },
  };
};

// passes redux state to component properties
AddCard = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps,
)(AddCard);

export default AddCard;
