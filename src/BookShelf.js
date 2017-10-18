import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelfRow from './BookShelfRow'
import keyIndex from 'react-key-index';


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

        let ebooks = keyIndex(books, 1);

        read                = ebooks.filter((book) => book.shelf === 'read')
        currentlyReading    = ebooks.filter((book) => book.shelf === 'currentlyReading')
        wantToRead          = ebooks.filter((book) => book.shelf === 'wantToRead')

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelfRow  bookshelfTitle={'Currently Reading'} onBookUpdate={onBookUpdate} books={currentlyReading}/>
                        <BookShelfRow  bookshelfTitle={'Want to Read'} onBookUpdate={onBookUpdate} books={wantToRead}/>
                        <BookShelfRow  bookshelfTitle={'Read'} onBookUpdate={onBookUpdate} books={read}/>
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