import React, { useState } from 'react'

const BookCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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