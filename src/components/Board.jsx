import React, { Component, PropTypes } from 'react'
import Cover from './Cover'
import { DropTarget } from 'react-dnd'

const boardTarget = {
  drop (props, monitor, component) {
    const item = monitor.getItem()
    const delta = monitor.getDifferenceFromInitialOffset()
    const left = Math.round(item.left + delta.x)
    const top = Math.round(item.top + delta.y)
    if (item.onBoard) {
      component.moveCover(item.id, left, top)
    } else {
      component.addCover(item.cover, left, top)
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

export class Board extends Component {
  moveCover (id, left, top) {
    this.props.updateBoard({
      id: id,
      left: left,
      top: top
    })
  }

  addCover (cover, left, top) {
    this.props.addToBoard(cover.set('left', left).set('top', top))
  }
  getCovers () {
    const { covers, deleteCover } = this.props
    return covers.map((cover, idx) => {
      return (
        <Cover key={idx}
          id={idx}
          left={cover.get('left')}
          top={cover.get('top')}
          onBoard={true}
          cover={cover}
          hideSourceOnDrag={true}
          deleteCover={deleteCover}
        />
      )
    })
  }
  render () {
    const { name, connectDropTarget } = this.props
    return connectDropTarget(
      <div className='board-container'>
        <div className='board-header'>
          <h3>{name}</h3>
        </div>
        <div className='board'>
          {this.getCovers()}
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  hideSourceOnDrag: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  updateBoard: PropTypes.func.isRequired,
  addToBoard: PropTypes.func.isRequired,
  deleteCover: PropTypes.func.isRequired,
  covers: PropTypes.object.isRequired
}

export default DropTarget('box', boardTarget, collect)(Board)
