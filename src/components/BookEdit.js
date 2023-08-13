import React, { useState } from 'react'

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleTitleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
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