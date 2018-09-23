import StateApi from 'state-api';

import { data } from '../testData';

const api = new StateApi(data);

describe('DataApi', () => {
  it('should expose articles as an object', () => {
    const articles = api.getState().articles;

    const rndArticleId = data.articles[0].id;

    expect(articles).toHaveProperty(rndArticleId);
    expect(articles[rndArticleId]).toEqual(data.articles[0]);
  });

  it('should expose authors as an object', () => {
    const authors = api.getState().authors;

    const rndAuthorId = data.authors[0].id;

    expect(authors).toHaveProperty(rndAuthorId);
    expect(authors[rndAuthorId]).toEqual(data.authors[0]);
  });
  
});
