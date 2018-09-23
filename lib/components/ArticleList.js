import React from 'react';

import ArticleItem from './ArticleItem';

const ArticleList = (props) => {
  const { articles } = props;



  return (
    <div>
      {Object.values(articles).map(article => <ArticleItem 
        key={article.id}
        article={article}
      />)}
    </div>
  );
};

export default ArticleList;

