import React, { Component } from 'react';
import PropTypes from 'prop-types';


import ArticleList from './ArticleList';

import StateApi from 'state-api';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

class App extends Component {
  state = this.props.store.getState()

  getChildContext() {
    return {
      store: this.props.store
    };
  }
  
  render() {
    return (
      <div style={styles.main}>
        <ArticleList 
          articles={this.state.articles}
        />
      </div>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.instanceOf(StateApi)
};

export default App;