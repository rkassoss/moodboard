import React, { Component, PropTypes } from 'react'
import CoverMeta from './CoverMeta'
import { DragSource } from 'react-dnd'

const CoverSource = {
  //  TODO Write better function for offset
  beginDrag (props) {
    let { id, left, top, onBoard, cover } = props
    if (!onBoard) {
      if (id > 5) {
        left = left + 202 * (id - 6)
        top = top - 214
      } else {
        left = left + 202 * id
        top = top - 372
      }
    }
    return { id, left, top, onBoard, cover }
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export class Cover extends Component {
  render () {
    const { id,
      hideSourceOnDrag,
      left,
      top,
      connectDragSource,
      isDragging,
      onBoard,
      cover,
      deleteCover } = this.props
    if (isDragging && hideSourceOnDrag) {
      return null
    }
    return connectDragSource(
      <div className='cover' style={{left, top, backgroundImage: `url(${cover.get('image')})`}}>
        <CoverMeta id={id}
          onBoard={onBoard}
          name={cover.get('name')}
          publishedOn={cover.get('publishedOn')}
          views={cover.get('views')}
          deleteCover={deleteCover} />
      </div>
    )
  }
}

Cover.propTypes = {
  onBoard: PropTypes.bool.isRequired,
  cover: PropTypes.object.isRequired,
  deleteCover: PropTypes.func,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  hideSourceOnDrag: PropTypes.bool.isRequired,
  children: PropTypes.node
}

export default DragSource('box', CoverSource, collect)(Cover)
