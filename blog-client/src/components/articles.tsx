import React from 'react';
import '../articles.css';

// Define the structure of an individual article
interface Article {
  title: string;
  body: string;
}

export interface ArticleProps {
  title: string;
  body: string;
  articles: Article[];
}

const Articles: React.FunctionComponent<ArticleProps> = (props) => {
  return (
    <div>
      {/* <h5>Articles</h5> */}
      <ul className='articles-ul' >
        {props.articles.map((article, index) => (
          <div key={index}>
            <h2 className='article-header'>{article.title}</h2>
            <p className="article-body">{article.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Articles;