import React, { Component, PropTypes } from 'react'
import update from 'react/lib/update'
import Cover from './Cover'
import { DropTarget } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'



const boardTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem()
    const delta = monitor.getDifferenceFromInitialOffset()
    const left = Math.round(item.left + delta.x)
    const top = Math.round(item.top + delta.y)
    if (item.onBoard) {
      component.moveCover(item.id, left, top)
    } else {
      component.addCover(item)
    }
  }
}

const propTypes = {
  hideSourceOnDrag: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

export class Board extends Component {
  moveCover(id, left, top) {
    this.props.updateBoard({
      id: id,
      left: left,
      top: top
    })
  }

  addCover(cover) {
    this.props.addToBoard(
      {
        cover: cover.image,
        left: 0,
        top: 0
      }
    )
  }

  render() {
    console.log('hi')
    const { hideSourceOnDrag, connectDropTarget, covers } = this.props
    const coversArray = covers.toJS()
    return connectDropTarget(
      <div className='board'>
        {coversArray.map((cover, idx) => {
          const { left, top, title, type} = cover
          return (
            <Cover key={idx}
                 id={idx}
                 left={left}
                 top={top}
                 onBoard={true}
                 image={cover.cover}
                 hideSourceOnDrag={hideSourceOnDrag}>
              {title}
            </Cover>
          )
        })}
      </div>
    )
  }
}

Board.propTypes = propTypes

export default DropTarget('box', boardTarget, collect)(Board)
