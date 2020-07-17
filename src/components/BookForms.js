import React, { useContext, useState } from 'react'
import { bookContext } from '../contexts/bookContext'


const BookForms = (props) => {
    const { dispatch } = useContext(bookContext);
    const [createBook, setCreateBook] = useState({
        title: "",
        author: ""
    })

    const submitHandler = (ev) => {
        ev.preventDefault();
        dispatch({
            type: "ADD_BOOK",
            book: { title: createBook.title, author: createBook.author }
        });
        setCreateBook({
            title: "",
            author: ""
        })
    }
    const changeHandler = (ev) => {
        setCreateBook({
            ...createBook,
            [ev.target.name]: ev.target.value
        });
    };
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="book title"
                name="title"
                value={createBook.title}
                required
                onChange={changeHandler} />
            <input
                type="text"
                placeholder="book author"
                name="author"
                required
                value={createBook.author}
                onChange={changeHandler} />
            <input type="submit" value="addBook" />
        </form>
    )
}

export default BookForms
