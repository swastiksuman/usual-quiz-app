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

function Turn({author, books}){
  return (<div className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"></img>
      </div>
      <div className="col-6">
        {books.map((title) => <p>{title}</p>)}
      </div>
    </div>
  );
}

function Continue(){
  return <h1>s</h1>;
}

function Footer(){
  return <h1>Footer</h1>;
}

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData}/>
      <Continue/>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;
