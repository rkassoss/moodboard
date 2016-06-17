import React, { PropTypes } from 'react'

export class SearchCovers extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    this.props.searchCovers(this.refs.query.value)
  }
  nextPage (e) {
    e.preventDefault()
    this.props.searchNewPage(1)
  }
  previousPage (e) {
    e.preventDefault()
    this.props.searchNewPage(-1)
  }
  render () {
    const { searchPage } = this.props
    return (
      <div className='search-control'>
        <form className='search-form' onSubmit={this.handleSubmit.bind(this)}>
          <label>Search Covers:</label>
          <input type='text' ref='query' placeholder='e.g. Cats' />
          <input type='submit' value='Send' />
        </form>
        <div className='pagination'>
          <button
            style={{visibility: searchPage > 1 ? 'visible' : 'hidden'}}
            onClick={this.previousPage.bind(this)}>Prev</button>
          <div className='page'>{this.props.searchPage}</div>
          <button onClick={this.nextPage.bind(this)}>Next</button>
        </div>
      </div>

    )
  }
}

SearchCovers.propTypes = {
  searchPage: PropTypes.number.isRequired,
  searchNewPage: PropTypes.func.isRequired,
  searchCovers: PropTypes.func.isRequired
}
