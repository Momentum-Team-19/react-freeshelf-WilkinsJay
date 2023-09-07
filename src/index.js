import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BookTitle from './BookTitle';
import BookAuthor from './BookAuthor';
import BookDescription from './BookDescription';
import BookCover from './BookCover';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const BookPage = () => {
    const book = {
        title: 'The Secret',
        author: 'Napolean Hill',
        description: '',
        coverUrl: '',
    };

    return (
        <div>
            <BookTitle title={book.title} />
            <BookAuthor author={book.author} />
            <BookDescription description={book.description} />
            <BookCover coverUrl={book.coverUrl} />
        </div>
    );
}

export default BookPage;
