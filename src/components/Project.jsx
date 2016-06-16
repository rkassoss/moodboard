import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

const projectSource = {
  beginDrag(props) {
    const { id, left, top, type, title } = props
    return { id, left, top, type, title }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


export class Project extends Component {

  render() {
    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props
    if (isDragging && hideSourceOnDrag) {
      return null
    }
    console.log(this.props.id)
    return connectDragSource(
      <div style={{ ...style, left, top }}>
        {children}
      </div>
    )
  }
}

Project.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  hideSourceOnDrag: PropTypes.bool.isRequired,
  children: PropTypes.node
}

export default DragSource('box', projectSource, collect)(Project)
