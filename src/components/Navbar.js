import React, { useContext } from 'react'
import { bookContext } from '../contexts/bookContext';

const Navbar = () => {
    const { books } = useContext(bookContext);
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books:</p>
        </div>
    )
}

export default Navbar
