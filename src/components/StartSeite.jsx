import React from 'react';
import styles from './StartSeite.module.css';
import { useNavigate } from 'react-router-dom';

// Компонент для навигации
const StartNavigate = () => {
  const navigate = useNavigate();
  
  const goToArticles = () => {
    navigate('/articles');
  };
  
  return (
    <button className={styles.button} onClick={goToArticles}>Перейти к статьям</button>
  );
};

// Главный компонент страницы
const StartSeite = () => {
  return (
    <div className={styles.home}>
      <h1>Добро пожаловать на Главную страницу</h1>
      <p>Это домашняя страница вашего приложения.</p>
      <StartNavigate />
    </div>
  );
};

export default StartSeite;