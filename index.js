import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Card(props){
    return(
      <div className="article">
      <img src={props.imgSrc} alt={articleTi} />
      <div className="article-title">{props.articleTitle}</div>
      <div className="article-description">{props.articleDescription}</div>
      <div className="article-rating">&#11088; Rating: {props.articleRating}</div>
      <div className="article-author">Author: {props.articleAuthor}</div>
    </div>
  );
}
    


const root = ReactDOM.createRoot();
root.render( <>
<Card imgsrc='art1.jpg'
articleTitle ='Article 1' 
articleDescription = 'Description of Article 1' 
articleRating= '5' articleAuthor='NAME'/>

<Card imgsrc='art1.jpg'
articleTitle ='Article 1' 
articleDescription = 'Description of Article 2' 
articleRating= '4' articleAuthor='NAME'/>

<Card imgsrc='art1.jpg'
articleTitle ='Article 1' 
articleDescription = 'Description of Article 3' 
articleRating= '4.3' articleAuthor='NAME'/>

<button>See all articles</button>

<Card imgsrc='tutorial.jpg'
articleTitle ='Article 1' 
articleDescription = 'Description of description 1' 
articleRating= '5' articleAuthor='NAME'/>

<Card imgsrc='tutorial.jpg'
articleTitle ='Article 1' 
articleDescription = 'Description of description 2' 
articleRating= '4.4' articleAuthor='NAME'/>

<Card imgsrc='tutorial.jpg'
articleTitle ='Article 1' 
articleDescription = 'Description of description 3' 
articleRating= '3.2' articleAuthor='NAME'/>

<button>See all tutorials</button>
</>

,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
