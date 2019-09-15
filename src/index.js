import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthorQuiz from './App';

const authors = [
    {
        name: "Mark Twain",
        imageUrl: "https://cdn.britannica.com/s:300x300/83/136283-050-9C9D6ED8/Mark-Twain-1907.jpg",
        imageSource: "Wikimedia Commons",
        books: ["The Adventures of Huckleberry Finn"]
    }
];

const state = {
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
}

ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
