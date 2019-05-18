import React, { Component } from 'react';
import './App.css';
import AddCard from './containers/AddCard';
import Board from './containers/Board';
import { connect } from 'react-redux';
import { loadCards, loadUsers, loadPriorities, loadStatuses } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      users: [],
      priorities: [],
      statuses: [],
    };
  }

  componentDidMount() {
    return this.props.loadCards() && this.props.loadUsers() && this.props.loadPriorities() && this.props.loadStatuses();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Board cards={this.props.cards} statuses={this.props.statuses} />
        <div className="add-card-form">
          <AddCard users={this.props.users} statuses={this.props.statuses} priorities={this.props.priorities} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    users: state.users,
    priorities: state.priorities,
    statuses: state.statuses,
    // only if using multiple reducers
    // cards: state.cardReducer.cards,
  };
};

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
