import React, { useContext, useState } from 'react'
import BooksContext from '../context/books';

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleTitleSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, title);
        onSubmit();
    }
    return (
        <div>
            <form action="" onSubmit={handleTitleSubmit} className='book-edit'>
                <input type="text" name="" id="" value={title} onChange={handleChange} className='input' />
                <button className='button is-primary'>Save</button>
            </form>
        </div>
    )
}

export default BookEdit