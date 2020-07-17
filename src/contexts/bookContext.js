import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const bookContext = createContext();

const BookContectProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [],
        () => {
            const data = localStorage.getItem('books');
            return data ? JSON.parse(data) : [];
        });

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books])
    return (
        <bookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </bookContext.Provider>
    );
}

export default BookContectProvider;