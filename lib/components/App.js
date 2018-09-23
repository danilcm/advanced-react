import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';

import StateApi from 'state-api';
import SearchBarDebounce from './SearchBar+Debounce';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fcfcfd',
    paddingTop: 20,
  }
};

class App extends Component {
  state = this.props.store.getState()

  componentDidMount = () => {
    this.props.store.sub(this.onStoreStateChange);
  }

  componentWillUnmount = () => {
    this.props.store.unsub(this.onStoreStateChange);
  }
  
  
  onStoreStateChange = (state) => this.setState(state)
  

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  filterArticles(articles, term) {
    if (!term) {
      return articles;
    }

    return pickBy(articles, (article) => 
      article.title.match(term) || article.body.match(term));
  }
  
  render() {
    return (
      <div style={styles.main}>
        <SearchBarDebounce onSearch={this.props.store.setTerm} />
        <ArticleList 
          articles={this.filterArticles(this.state.articles, this.state.term)}
        />
      </div>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.instanceOf(StateApi)
};

export default App;