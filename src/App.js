import { useState } from 'react'
import './App.css'
import bookData from './book-data.json'

function App() {

    const [showMore, setShowMore] = useState(false)
    return (
        <div className='App'>
            {/* Use bookData to show books on the page*/}

            {
                bookData.map((book) => (
                    <div className='book'>
                        <Book title={book.title}
                            author={book.author}
                            coverImageUrl={book.coverImageUrl}
                            shortDescription={book.shortDescription}
                        />
                        <button onClick={() => {
                            setShowMore(true)
                        }} >More Information
                        </button>
                        {/* showMore==true ?(
                        {book.detailedDescription}
                        ):(
                            null
                        ) */}
                    </div>
                ))
            }
        </div>

    )
}

function Book({ title, author, coverImageUrl, shortDescription }) {
    return (
        <div className='book-card'>
            <h3 className='book-title'>Title: {title}</h3>
            <h4 className='book-author'> By: {author}</h4>
            <p className='book-description'>{shortDescription}</p>
            <img className='book-cover' src={coverImageUrl}></img>
        </div>
    )

}

export default App
