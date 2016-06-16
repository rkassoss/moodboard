import React, { PropTypes } from 'react'

export class BoardControl extends React.Component {
  handleRename (e) {
    e.preventDefault()
    if (this.refs.rename.value.length > 0) {
      this.props.renameBoard(this.refs.rename.value)
      this.refs.rename.value = ''
    }
  }
  handleCreate (e) {
    e.preventDefault()
    if(this.refs.name.value.length > 0) {
      this.props.createBoard(this.refs.name.value)
      this.refs.name.value = ''
    }
  }
  render () {
    return (
      <div className="board-control">
        <form onSubmit={this.handleRename.bind(this)}>
          <label>Rename Board:</label>
          <input type='text' ref='rename' value={this.props.name}/>
          <input type='submit' value='Save'/>
        </form>
        <form onSubmit={this.handleCreate.bind(this)}>
          <label>New Board:</label>
          <input type='text' ref='name' placeholder='e.g. Catty moods'/>
          <input type='submit' value='Create'/>
        </form>
      </div>
    )
  }
}
