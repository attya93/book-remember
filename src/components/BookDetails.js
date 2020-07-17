import React, { useContext } from 'react'
import { bookContext } from '../contexts/bookContext'

const BookDetails = ({ id, title, author }) => {
    const { dispatch } = useContext(bookContext)
    return (
        <li onClick={() => dispatch({ type: "REMOVE_BOOK", id })}>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
        </li>
    )
}

export default BookDetails
