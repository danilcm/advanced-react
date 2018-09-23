import express from 'express';
import config from './config.js';

import serverRender from 'renderers/server';

import { data } from './testData.json';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', async (req, res) => res.render('index', await serverRender()));

app.get('/api/data', (req, res) => res.send(data));

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});