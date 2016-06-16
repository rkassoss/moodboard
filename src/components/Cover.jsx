import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

const CoverSource = {
  beginDrag(props) {
    const { id, left, top, onBoard, image } = props
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
    console.log(this.props.image)
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
