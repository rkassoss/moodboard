import React from 'react'

export class CoverMeta extends React.Component {
  handleDelete (e) {
    const { id, deleteCover, onBoard } = this.props
    deleteCover(id)
  }
  getDeleteButton() {
    const { onBoard } = this.props
    if (onBoard) {
      return (
      <div className='delete'
        onClick={this.handleDelete.bind(this)}>
        x
      </div>)
    }
  }
  render () {
    const { name, publishedOn, views, onBoard } = this.props
    return (
      <div className='meta'>
        <div className='info'>
          i
          <div className='tooltip'>
            <span><strong>Title:</strong> {name}</span>
            <span><strong>Views:</strong> {views}</span>
          </div>
        </div>
        { this.getDeleteButton() }
      </div>
    )
  }
}
