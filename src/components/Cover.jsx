import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

const CoverSource = {
  beginDrag(props) {
    let { id, left, top, onBoard, image } = props
    if(!onBoard) {
      if (id > 5) {
        left = left + 202 * (id - 6)
        top = top - 150

      } else {
        left = left + 202 * id
        top = top - 300

      }
      return { id, left, top, onBoard, image }
    }
    return { id, left, top, onBoard, image }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


export class Cover extends Component {
  render() {
    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props
    if (isDragging && hideSourceOnDrag) {
      return null
    }
    return connectDragSource(
      <div className='cover' style={{ left, top, backgroundImage:`url(${this.props.image})`}}>
        {children}
      </div>
    )
  }
}

Cover.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  hideSourceOnDrag: PropTypes.bool.isRequired,
  children: PropTypes.node
}

export default DragSource('box', CoverSource, collect)(Cover)
