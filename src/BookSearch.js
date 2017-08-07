import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {

    static propTypes = {
        onBookUpdate: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired

    }

    state = {
        query: '',
        availableBooks: []
    }

    updateQuery = (query) => {
        if(query.length > 1) {
            let bookSearch = BooksAPI.search(query, 20)
            bookSearch.then((response) => {
                if (response.error) {
                    this.setState({availableBooks: []})
                    this.setState({ query: ''})
                } else {
                    this.props.books.forEach((b) =>{
                        response.forEach((r) =>{
                            if(b.id === r.id){
                                r.shelf = b.shelf
                            }
                        })
                    })

                    this.setState({availableBooks: response})
                }
            })
        } else {
            this.setState({ query: ''})
            this.setState({availableBooks: []})
        }
    }

    render() {

        const {availableBooks} = this.state
        const {onBookUpdate} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={(event) => {this.updateQuery(event.target.value)}} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {availableBooks.map((availableBooks) => (
                            <li key={availableBooks.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${availableBooks.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={availableBooks.shelf} onChange={(event) => onBookUpdate(availableBooks, event.target.value)}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{availableBooks.title}</div>
                                    <div className="book-authors">{availableBooks.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch

