import React from 'react';
import articleContent from './article-content';
import './PageStyle.css';
import ArticlesList from '../components/ArticlesList';

// Can use <React.Fragment></React.Fragment> in place <></>

const ArticlesListPage = () => (
    <>
        <h1 className="arthead" >Articles</h1>
        <ArticlesList articles = {articleContent} />
    </>
);

export default ArticlesListPage;
