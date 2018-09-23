import React from 'react';

import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  main: {
    marginBottom: 50
  },
  title: {
    fontFamily: 'Product Sans',
    fontWeight: 'bold'
  },
  link: {
    fontFamily: 'Product Sans',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1b649f',
    textDecoration: 'none',
  },
  body: {
    maxWidth: 400,
    textAlign: 'justify',
    fontFamily: 'Georgia'
  },
  date: {
    fontSize: 14,
    fontFamily: 'Product Sans',
    color: '#666666'
  }
};

const prettyDate = (isoString) => new Date(isoString).toDateString();

const ArticleItem = ({ author, article }) => {
  return (
    <div style={styles.main}>
      <h3 field="title" style={styles.title}>{article.title}</h3>
      <a field="website" style={styles.link} href={author.website}>{`${author.firstName} ${author.lastName}`}</a>
      <p field="body" style={styles.body}>{article.body}</p>
      <span field="date" style={styles.date}>{prettyDate(article.date)}</span>
    </div>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  })
};

ArticleItem.displayName = 'Article';

const mapExtraProps = (store, props) => ({
  author: store.getAuthor(props.article.authorId)
});

export const ArticleItemPure = ArticleItem;

export default storeProvider(mapExtraProps)(ArticleItem);

