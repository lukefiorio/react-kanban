import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import AddCard from './containers/AddCard';
import Board from './containers/Board';
// import CardToDo from './containers/CardToDo';
// import CardInProgress from './containers/CardInProgress';
// import CardDone from './containers/CardDone';
import { connect } from 'react-redux';
import { loadCards } from './actions';
import { loadUsers } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      users: [],
    };
  }

  componentDidMount() {
    // console.log('mount:', this.props.loadCards());
    // return this.props.loadCards();
    // return this.setState({ cards: this.props.loadCards(), users: this.props.loadUsers() });
    return this.props.loadCards() && this.props.loadUsers();
  }

  componentWillReceiveProps(nextProps) {
    return this.setState({ cards: nextProps.cards });
  }

  render() {
    // console.log('CARDS:', this.props.cards);
    // console.log('USERS:', this.props.users);
    return (
      <div className="App">
        <header className="App-header" />
        <div className="card-container">
          {/* pass current props.cards to child (Board) as 'cards' */}
          <Board cards={this.props.cards} />
          {/* <div className="cardToDo-container">
            <h3>To-Do</h3>
            <CardToDo cards={this.props.cards} />
          </div>
          <div className="cardInProgress-container">
            <h3>In-Progress</h3>
            <CardInProgress cards={this.props.cards} />
          </div>
          <div className="cardDone-container">
            <h3>Done</h3>
            <CardDone cards={this.props.cards} />
          </div> */}
        </div>
        <div className="add-card-form">
          <AddCard users={this.props.users} />
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   cards: PropTypes.array.isRequired,
// };

const mapStateToProps = (state) => {
  // return { ...state }
  return {
    cards: state.cards,
    users: state.users,
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
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
