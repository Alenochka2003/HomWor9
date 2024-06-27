import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './EinzelArticle.module.css';


const EinzelArticle = () => {
  const { id } = useParams();
  const article = { id, title: `Статья ${id}`, content: `Это содержимое статьи номер ${id}.` };
  
 

  return (
    <div className={styles.article}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default EinzelArticle ;