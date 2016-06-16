import React, { Component, PropTypes } from 'react'
import update from 'react/lib/update'
import Project from './Project'
import { DropTarget } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'



const boardTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem()
    const delta = monitor.getDifferenceFromInitialOffset()
    const left = Math.round(item.left + delta.x)
    const top = Math.round(item.top + delta.y)
    if (item.type === 'internalProject') {
      component.moveProject(item.id, left, top)
    } else {
      component.addProject(item)
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
  moveProject(id, left, top) {
    this.props.updateBoard({
      id: id,
      left: left,
      top: top
    })
  }

  addProject(project) {
    this.props.addToBoard(
      {
        title: project.title,
        left: 0,
        top: 0
      }
    )
  }

  render() {
    const { hideSourceOnDrag, connectDropTarget, projects } = this.props
    const projectsArray = projects.toJS()
    return connectDropTarget(
      <div className='board'>
        {projectsArray.map((project, idx) => {
          const { left, top, title, type} = project
          return (
            <Project key={idx}
                 id={idx}
                 left={left}
                 top={top}
                 type={type}
                 hideSourceOnDrag={hideSourceOnDrag}>
              {title}
            </Project>
          )
        })}
      </div>
    )
  }
}

Board.propTypes = propTypes

export default DropTarget('box', boardTarget, collect)(Board)
