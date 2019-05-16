import React, { Component } from 'react';
import './App.css';
import CardList from './containers/CardList';
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
        <div className="cardlist-container">
          <CardList cards={this.props.cards} />
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
