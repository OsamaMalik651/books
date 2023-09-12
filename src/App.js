import React, { useEffect, useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

const App = () => {
    const [books, setBooks] = useState([]);

    const fetchbooks = async () => {
        const response = await axios.get('http://localhost:3001/books',);
        setBooks(response.data);
    }
    useEffect(() => {
        fetchbooks();
    }, []);

    const createBook = async (title) => {
        // setBooks([...books, { id: Math.round(Math.random() * 9999), title }])
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });
        setBooks(updatedBooks)
    }
    const editBookById = async (id, title) => {

        // setBooks(updatedBooks)
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: title
        });
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book
        });
        setBooks(updatedBooks)
    }
    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App