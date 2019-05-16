import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { changeStatus } from '../../actions';

class ChangeStatus extends Component {
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
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispacthToProps = (dispatch) => {
  return {
    // this first addCard is the one we get from this.props.addBook
    // in the handleSubmit(e) function
    changeStatus: (card) => {
      // THIS addBook (below) is the action we imported at top
      // book is the newBook we'll be passing in
      const changeStatusAction = changeStatus(card);
      dispatch(changeStatusAction);
    },
  };
};

// passes redux state to component properties
ChangeStatus = connect(
  mapStateToProps,
  mapDispacthToProps,
)(ChangeStatus);

export default ChangeStatus;
