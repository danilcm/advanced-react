import React from 'react';
import PropTypes from 'prop-types';

import StateApi from 'state-api';

const storeProvider = (mapProps = () => {}) => (Component) => {
  const WithStore = (props, {store}) => <Component {...props} {...mapProps(store, props)} store={store} />;

  WithStore.contextTypes = {
    store: PropTypes.instanceOf(StateApi).isRequired,
  };

  WithStore.displayName = Component.name + 'Container';

  return WithStore;
};

export default storeProvider;