import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartSeite from './components/StartSeite';
import ListArticle from './components/ListArticle';
import EinzelArticle from './components/EinzelArticle';
import styles from './components/App.module.css';
import DynamicForm from './componentsDinamik/DynamicForm';

const App = () => {
  return (
    <Router>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/articles">Статьи</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StartSeite />} />
        <Route path="/articles" element={<ListArticle />} />
        <Route path="/articles/:id" element={<EinzelArticle />} />
      </Routes>
      <h1>Dynamic Form Example</h1>
      <DynamicForm />
    </Router>
    
  );
};

export default App;