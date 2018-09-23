import React from 'react';
import PropTypes from 'prop-types';

import StateApi from 'state-api';

const storeProvider = (Component) => {
  const WithStore = (props, {store}) => <Component {...props} store={store} />;

  WithStore.contextTypes = {
    store: PropTypes.instanceOf(StateApi).isRequired,
  };

  WithStore.displayName = Component.displayName + 'WithStore';

  return WithStore;
};

export default storeProvider;