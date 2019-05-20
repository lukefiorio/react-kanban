import React, { Component } from 'react';
import './App.css';
import AddCard from './containers/AddCard';
import Board from './containers/Board';
import { connect } from 'react-redux';
import { loadCards, loadUsers, loadPriorities, loadStatuses } from './actions';
import EditCard from './containers/EditCard';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.loadCards() && this.props.loadUsers() && this.props.loadPriorities() && this.props.loadStatuses();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Board
          cards={this.props.cards}
          users={this.props.users}
          priorities={this.props.priorities}
          statuses={this.props.statuses}
        />
        <div className="add-container">
          <h4 className="add-header">New Card Form</h4>
          <div className="add-card-form">
            <AddCard users={this.props.users} statuses={this.props.statuses} priorities={this.props.priorities} />
          </div>
        </div>
      </div>
    );
  }
}

// assigns props from store to container
const mapStateToProps = (store) => {
  return {
    cards: store.cards,
    users: store.users,
    priorities: store.priorities,
    statuses: store.statuses,
    showModal: store.showModal,
    modalProps: store.modalProps,
    // only if using multiple reducers
    // cards: state.cardReducer.cards,
  };
};

// dispatch IS the reducer function
// --mapDispatchToProps gives the current component
// --(App, in this case) access to the reducer
// what do we pass to reducer?
// --we pass the actions (which each return an object)
// --that we imported at the top of the file
const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    },
    loadUsers: () => {
      return dispatch(loadUsers());
    },
    loadPriorities: () => {
      return dispatch(loadPriorities());
    },
    loadStatuses: () => {
      return dispatch(loadStatuses());
    },
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
