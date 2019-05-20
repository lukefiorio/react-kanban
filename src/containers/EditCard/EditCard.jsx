import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../actions';
import UserDropDown from '../../components/UserDropDown';
import StatusDropDown from '../../components/StatusDropDown';
import PriorityDropDown from '../../components/PriorityDropDown';

class EditCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      priority_id: this.props.priority_id,
      status_id: this.props.status_id,
      created_by: this.props.created_id,
      assigned_to: this.props.assigned_id,
    };

    // this.state = this.props.showModal;
    // this.state = {
    //   showModal: this.props.showModal,
    //   modalProps: this.props.modalProps,
    // };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCreatedChange = this.handleCreatedChange.bind(this);
    this.handleAssignedChange = this.handleAssignedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // static getDerivedStateFromProps(props, current_state) {
  //   if (current_state.modalProps !== props.modalProps) {
  //     return {
  //       showModal: props.showModal,
  //       modalProps: props.modalProps,
  //     };
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({
        title: this.props.title,
        body: this.props.body,
        priority_id: this.props.priority_id,
        status_id: this.props.status_id,
        created_by: this.props.created_id,
        assigned_to: this.props.assigned_id,
      });
    }
  }

  handleTitleChange(e) {
    // const { value } = e.target;
    this.setState({ title: e.target.value });
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

    const { id, title, body, priority_id, status_id, created_by, assigned_to } = this.state;

    // pass editCard() to dispatchToProps;
    this.props.editCard({
      id,
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to,
    });

    // this.setState({ showModal: false });
    this.props.hideEdit(e);

    // this.props.hideModal();
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
      <div id="modalEdit">
        <form id="editForm">
          <div className="formRow">
            <label>Title:</label>
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
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
          </div>
          <div className="formRow">
            <label>Status:</label>
            <select value={this.state.status_id} onChange={this.handleStatusChange}>
              {statusDropDown}
            </select>
          </div>
          <div className="formRow">
            <label>Created By:</label>
            <select value={this.state.created_id} onChange={this.handleCreatedChange}>
              {userDropDown}
            </select>
          </div>
          <div className="formRow">
            <label>Assigned To:</label>
            <select value={this.state.assigned_id} onChange={this.handleAssignedChange}>
              {userDropDown}
            </select>
          </div>
          <button onClick={this.handleSubmit}>Update Card</button>
          <div className="form-submit">
            <button className="edit-form-button" value={this.props.id} onClick={this.props.hideEdit}>
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card) => {
      dispatch(editCard(card));
    },
  };
};

// passes redux state to component properties
EditCard = connect(
  null,
  mapDispatchToProps,
)(EditCard);

export default EditCard;
