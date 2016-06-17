import React, { PropTypes } from 'react'

class BoardControl extends React.Component {
  handleRename (e) {
    e.preventDefault()
    if (this.refs.rename.value.length > 0) {
      this.props.renameBoard(this.refs.rename.value)
      this.refs.rename.value = ''
    }
  }
  handleCreate (e) {
    e.preventDefault()
    if (this.refs.name.value.length > 0) {
      this.props.createBoard(this.refs.name.value)
      this.refs.name.value = ''
    }
  }
  render () {
    const { clearBoard, toggleGrid, grid } = this.props
    return (
      <div className='board-control'>
        <button onClick={() => toggleGrid()}>Turn Grid {grid ? 'Off' : 'On'}</button>
        <button onClick={() => clearBoard()}>Clear</button>
        <form onSubmit={this.handleRename.bind(this)}>
          <label>Rename Board:</label>
          <input type='text' ref='rename' />
          <input type='submit' value='Save' />
        </form>
        <form onSubmit={this.handleCreate.bind(this)}>
          <label>New Board:</label>
          <input type='text' ref='name' placeholder='e.g. Catty moods' />
          <input type='submit' value='Create' />
        </form>
      </div>
    )
  }
}

BoardControl.propTypes = {
  createBoard: PropTypes.func.isRequired,
  renameBoard: PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired,
  toggleGrid: PropTypes.func.isRequired,
  grid: PropTypes.bool.isRequired
}

export default BoardControl
