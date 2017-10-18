import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfRow extends Component {

    static propTypes = {
        bookshelfTitle: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onBookUpdate: PropTypes.func.isRequired
    }

    render(){

        const {bookshelfTitle, books, onBookUpdate} = this.props


        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((books) => (
                            <li key={books.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={books.shelf} onChange={(event) => onBookUpdate(books, event.target.value)}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{books.title}</div>
                                    <div className="book-authors">{books.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            )
    }
}

export default BookShelfRow
