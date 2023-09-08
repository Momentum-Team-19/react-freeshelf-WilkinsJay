import { useState } from 'react'
import './App.css'
import bookData from './book-data.json'

function App() {

    return (
        <div className='App'>
            {/* Use bookData to show books on the page*/}

            {
                bookData.map((book) => (
                    <div className='book'>
                        <Book title={book.title}
                            author={book.author}
                            coverImageUrl={book.coverImageUrl}
                            url={book.url}
                            publisher={book.publisher}
                            publicationDate={book.publicationDate}
                            shortDescription={book.shortDescription}
                            detailedDescription={book.detailedDescription}
                        />
                    </div>
                ))
            }
        </div>

    )
}

function Book({ title, author, coverImageUrl, url, publisher, publicationDate, shortDescription, detailedDescription }) {
    const [showMore, setShowMore] = useState(false)
    const toggleDescription = () => {
        setShowMore(!showMore);
    }
    return (
        <div className='book-card'>
            <h3 className='book-title'>Title: {title}</h3>
            <h4 className='book-author'> By: {author}</h4>
            <p className='book-description'>{shortDescription}</p>
            <button onClick={toggleDescription}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
            {showMore === true ? <p className='detailedDescription'>{detailedDescription}</p> : null}
            <img className='book-cover' src={coverImageUrl}></img>
            <a className='book-url' href={url}>{url}</a>
            <h5 className='book-publisher'>{publisher}</h5>
            <h5 className='book-published'>{publicationDate}</h5>
        </div>
    )

}

export default App
