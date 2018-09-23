import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import toJson from 'enzyme-to-json';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { ArticleItemPure } from '../ArticleItem';

const testProps = {
  article: {
    'id': '95c12a8f6c88953ca8f8a39da25546e6',
    'title': 'Introducing React\'s Error Code System',
    'date': 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)',
    'authorId': '2c6aa2cfe3449467d329fa17d6ea230f',
    'body': 'wire.'
  },
  author: {
    'id': '335fb02ec8f76c8515821ac9f266d276',
    'firstName': 'Joseph',
    'lastName': 'Savona',
    'website': 'https://twitter.com/en_JS'
  }
};

const setup = () => shallow(<ArticleItemPure {...testProps}/>);

const checkByField = (field, expected, additional = () => {}) => (tree) => {
  const node = tree.find(`[field="${field}"]`);
  
  expect(node.text()).toBe(expected);
  additional(node);
};

describe('ArticleItem', () => {
  const tree = setup();

  it('should match the snapshot', () => {
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correct data', () => {
    checkByField(
      'title', 
      testProps.article.title
    )(tree);
    
    checkByField(
      'website', 
      `${testProps.author.firstName} ${testProps.author.lastName}`,
      (node) => expect(node.prop('href')).toBe(testProps.author.website)
    )(tree);
    
    checkByField(
      'body', 
      testProps.article.body
    )(tree);

    checkByField(
      'date', 
      new Date(testProps.article.date).toDateString()
    )(tree);
  });
  
});


