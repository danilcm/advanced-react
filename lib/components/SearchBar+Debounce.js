import React, { Component } from 'react';

import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

const styles = {
  input: {
    width: '100%',
    height: 50,
    border: 'none',
    fontSize: 15,
    fontFamily: 'Product Sans',
    padding: '0 20px',
    boxShadow: '0px 10px 60px -20px rgba(0,0,0,0.35)',
    borderRadius: 5,
    letterSpacing: 0.54
  },
  container: {
    width: 400
  }
};

export default class SearchBarDebounce extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }
  
  state = {
    value: ''
  }

  onSearch = debounce(() => {
    this.props.onSearch(this.state.value);
  }, 400)

  onChange = ({ target }) => {
    const { value } = target;
    
    this.setState({ value }, this.onSearch);
  }
  
  render() {
    return (
      <div style={styles.container}>
        <input 
          type="search"
          placeholder={this.props.placeholder || 'Start searching here...'}
          style={styles.input}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
