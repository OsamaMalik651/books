import axios from "axios";
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books',);
        setBooks(response.data);
    }
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
    const valueToShare = {
        books: books,
        editBookById: editBookById,
        deleteBookById: deleteBookById,
        fetchBooks: fetchBooks,
        createBook: createBook

    }
    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}
export { Provider };
export default BooksContext;