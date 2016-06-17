import React, { PropTypes } from 'react'

class CoverMeta extends React.Component {
  handleDelete (e) {
    const { id, deleteCover } = this.props
    deleteCover(id)
  }
  getDeleteButton () {
    const { onBoard } = this.props
    if (onBoard) {
      return (
        <div className='delete'
          onClick={this.handleDelete.bind(this)}>
         x
        </div>
      )
    }
  }
  render () {
    const { name, views } = this.props
    return (
      <div className='meta'>
        <div className='info'>
          i
          <div className='tooltip'>
            <span><strong>Title:</strong> {name}</span>
            <span><strong>Views:</strong> {views}</span>
          </div>
        </div>
        {this.getDeleteButton()}
      </div>
    )
  }
}

CoverMeta.propTypes = {
  id: PropTypes.number.isRequired,
  deleteCover: PropTypes.func.isRequired,
  onBoard: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  publishedOn: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired
}

export default CoverMeta
