import React, { PropTypes } from 'react'

export class SearchCovers extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    this.props.searchCovers(this.refs.query.value)
  }
  render () {
    const { searchPage, searchNewPage } = this.props
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
            onClick={() => searchNewPage(-1)}>Prev</button>
          <div className='page'>{this.props.searchPage}</div>
          <button onClick={() => searchNewPage(1)}>Next</button>
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
