import React, { PropTypes } from 'react'

export class SearchCovers extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    this.props.searchCovers(this.refs.query.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Search Covers:</label>
        <input type='text' ref='query' placeholder='e.g. Cats'/>
        <input type='submit' value='Send'/>
      </form>
    )
  }
}
