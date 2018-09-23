import React from 'React';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from 'components/App';
import config from 'config';
import StateApi from 'state-api';

export default async () => {

  const {data} = await axios.get(`http://${config.host}:${config.port}/api/data`);

  const store = new StateApi(data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store}/>),
    initialData: data
  };
};
