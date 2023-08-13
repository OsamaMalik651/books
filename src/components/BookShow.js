import React, { useState } from 'react'
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false);
    const handleClick = () => {
        onDelete(book.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = (id, title) => {
        onEdit(id, title)
        setShowEdit(!showEdit)
    }
    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}300/200`} alt="" />
            {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> :
                <div>
                    <h3>{book.title}</h3>
                </div>
            }
            <div className="actions">
                <button className="edit" style={{ backgroundColor: 'gray' }} onClick={handleEditClick}></button>

                <button className="delete" style={{ backgroundColor: 'red' }} onClick={handleClick}>X</button>
            </div>
        </div>
    )
}

export default BookShow