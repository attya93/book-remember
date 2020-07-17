import React, { useContext } from 'react'
import { bookContext } from '../contexts/bookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(bookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return <BookDetails
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author} />
                })}
            </ul>
        </div>
    ) : (
            <div className="empty">No Book To Read </div>
        );
}

export default BookList
