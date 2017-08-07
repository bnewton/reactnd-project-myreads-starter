import React from 'react'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch'
import BookShelf from "./BookShelf";
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    state = {
        books:[]
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    updateBook = (book, shelf) => {
        book.shelf = shelf
        BooksAPI.update(book, shelf)

        this.setState(state => ({
            books: state.books.filter((c) => c.id !== book.id),
        }))

        this.setState(state => ({
            books: state.books.concat([book])
        }))

    }

    render() {
        return (
          <div className="app">
            <Route exact path="/" render={() => (
                  <BookShelf onBookUpdate={this.updateBook}  books={this.state.books} />
                )} />

            <Route path="/search" render={({history}) => (
                <BookSearch onBookUpdate={this.updateBook} books={this.state.books} />
            )} />

          </div>
        )}
}

export default BooksApp
