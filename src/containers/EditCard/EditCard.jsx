import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard, hideModal } from '../../actions';
import UserDropDown from '../../components/UserDropDown';
import StatusDropDown from '../../components/StatusDropDown';
import PriorityDropDown from '../../components/PriorityDropDown';

class EditCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      body: this.props.body,
      priority_id: this.props.priority_id,
      status_id: this.props.status_id,
      created_by: this.props.created_by,
      assigned_to: this.props.assigned_to,
    };
    console.log(this.state);
    console.log('EditCard props:', this.props);
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

  handleTitleChange(e) {
    console.log(e.target);
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

    // pass editCard() to dispatchToProps;
    this.props.editCard({
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to,
    });

    this.props.hideModal();
  }

  render() {
    console.log('edit card rnder state', this.state);
    const userDropDown = this.props.users.map((user, idx) => {
      return <UserDropDown key={idx} id={user.id} first_name={user.first_name} last_name={user.last_name} />;
    });

    const priorityDropDown = this.props.priorities.map((priority, idx) => {
      return <PriorityDropDown key={idx} id={priority.id} name={priority.name} />;
    });

    const statusDropDown = this.props.statuses.map((status, idx) => {
      return <StatusDropDown key={idx} id={status.id} name={status.name} />;
    });

    if (this.props.showModal) {
      console.log('props', this.props);
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
              <select value={this.state.created_by.id} onChange={this.handleCreatedChange}>
                {userDropDown}
              </select>
            </div>
            <div className="formRow">
              <label>Assigned To:</label>
              <select value={this.state.assigned_to.id} onChange={this.handleAssignedChange}>
                {userDropDown}
              </select>
            </div>
            <button onClick={this.handleSubmit}>Update Card</button>
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card) => {
      dispatch(editCard(card));
    },
    hideModal: () => {
      dispatch(hideModal());
    },
  };
};

// passes redux state to component properties
EditCard = connect(
  null,
  mapDispatchToProps,
)(EditCard);

export default EditCard;
