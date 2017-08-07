import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookUpdate: PropTypes.func.isRequired
    }

    render() {

        let read
        let currentlyReading
        let wantToRead

        const {books, onBookUpdate} = this.props

        read                = books.filter((book) => book.shelf === 'read')
        currentlyReading    = books.filter((book) => book.shelf === 'currentlyReading')
        wantToRead          = books.filter((book) => book.shelf === 'wantToRead')

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReading.map((currentlyReading) => (
                                        <li key={currentlyReading.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${currentlyReading.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={currentlyReading.shelf} onChange={(event) => onBookUpdate(currentlyReading, event.target.value)}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{currentlyReading.title}</div>
                                                <div className="book-authors">{currentlyReading.authors}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">


                                    {wantToRead.map((wantToRead) => (
                                        <li key={wantToRead.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${wantToRead.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={wantToRead.shelf} onChange={(event) => onBookUpdate(wantToRead, event.target.value)}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{wantToRead.title}</div>
                                                <div className="book-authors">{wantToRead.authors}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">

                                    {read.map((read) => (
                                        <li key={read.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${read.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={read.shelf} onChange={(event) => onBookUpdate(read, event.target.value)}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{read.title}</div>
                                                <div className="book-authors">{read.authors}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookShelf