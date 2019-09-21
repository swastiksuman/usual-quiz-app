import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero(){
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>AuthorQuiz</h1>
      <p>Select the book written by the Author shown</p>
    </div>
  </div>);
}

function Turn({author, books, highlight, onAnswerSelected}){
  function highlightToBgColor(highlight){
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }
  return (<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"></img>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}></Book>)}
      </div>
    </div>
  );
}


function Book({title, onClick}){
  return (<div className="answer" onClick={()=>{onClick(title);}}>
    <h4>{title}</h4>
  </div>);
}

function Continue(){
  return <h1></h1>;
}

function Footer(){
  return <h1></h1>;
}

function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue/>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;
