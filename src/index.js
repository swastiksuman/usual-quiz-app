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
    },

    {
        name: "John Grisham",
        imageUrl: "https://www.gannett-cdn.com/-mm-/690e9fc483badce6ca423c47fee6849dc4436df3/c=0-17-330-457/local/-/media/DetroitFreePress/None/2014/10/16/635490552719580006-11178-grisham-john.jpg?width=534&height=712&fit=crop",
        imageSource: "Wikimedia Commons",
        books: ["The Rainmaker"]
    },
    {
        name: "Jeffrey Archer",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZmE1ZmE1NDYtM2Y4ZC00N2MwLWE2YTEtZjMzZDRmNWIxZGE4XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
        imageSource: "Wikimedia Commons",
        books: ["Kane And Abel"]
    },
    {
        name: "George R Martin",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_–_George_R._R._Martin.jpg",
        imageSource: "Wikimedia Commons",
        books: ["Game Of Thrones"]
    },
    {
        name: "Jules Verne",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Félix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg",
        imageSource: "Wikimedia Commons",
        books: ["20,000 Leagues Under Sea"]
    }

];

const state = {
    turnData: {
        author: authors[3],
        books: authors[0].books
    }
}

ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
