import React, { useContext, useState } from 'react'
import BooksContext from '../context/books';

const BookCreate = () => {
    const { createBook } = useContext(BooksContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title</label>
                <input className="input" type="text" name="title" value={title} onChange={handleChange} />
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate