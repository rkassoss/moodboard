import React, { PropTypes } from 'react'

export class SearchCovers extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    this.props.searchCovers(this.refs.query.value)
  }
  nextPage(e) {
    e.preventDefault()
    this.props.searchNewPage(1)
  }
  previousPage(e) {
    e.preventDefault()
    this.props.searchNewPage(-1)
  }
  render () {
    const searchPage = this.props
    return (
      <div className='search-control'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Search Covers:</label>
          <input type='text' ref='query' placeholder='e.g. Cats'/>
          <input type='submit' value='Send'/>
        </form>
        <div className='pagination'>
          <button
            style={{display: this.props.searchPage > 1 ? 'block' : 'none'}}
            onClick={this.previousPage.bind(this)}>Prev</button>
          {this.props.searchPage}
          <button
            onClick={this.nextPage.bind(this)} >Next</button>
        </div>
      </div>

    )
  }
}
