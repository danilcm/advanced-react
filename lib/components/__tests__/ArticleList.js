import React from 'react';

import ArticleList from '../ArticleList';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import enzymeToJson from 'enzyme-to-json';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: {
        id: 'a',
        body: 'body',
        title: 'title-a',
        date: new Date(100).toISOString()
      },
      b: {
        id: 'b',
        body: 'body',
        title: 'title-b',
        date: new Date(100).toISOString()
      }
    },
    store: {
      getAuthor: jest.fn(() => ({}))
    }
  };

  let tree;


  beforeEach(() => {
    tree = shallow(<ArticleList {...testProps} />);
  });

  it('should match snapshot', () => {
    expect(enzymeToJson(tree)).toMatchSnapshot();    
  });

  it('passes props to ArticleItem correctly', () => {
    const items = tree.getElement().props.children;

    const articlesAsArray = Object.values(testProps.articles);

    items.forEach((node, index) => {
      expect(node.props.article).toEqual(articlesAsArray[index]);
    });
  });
  
  
});
