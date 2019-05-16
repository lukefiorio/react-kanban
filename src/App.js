import React, { Component } from 'react';
import './App.css';
import AddCard from './containers/AddCard';
import CardToDo from './containers/CardToDo';
import CardInProgress from './containers/CardInProgress';
import CardDone from './containers/CardDone';
import { connect } from 'react-redux';
import { loadCards } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('mount:', this.props.loadCards());
    return this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div className="card-container">
          <div className="cardToDo-container">
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
          </div>
        </div>
        <div className="add-card-form">
          <AddCard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // return { ...state }
  return {
    cards: state.cardReducer.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    },
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
