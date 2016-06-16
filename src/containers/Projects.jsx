import React from 'react'
import { connect } from 'react-redux'
import Project from '../components/Project'

export class Projects extends React.Component {
  render () {
    return (
      <div className="projects">
        <Project key={0}
                id={0}
                top={0}
                left={0}
                type='externalProject'
                title='whatever project'
                hideSourceOnDrag={false}>
          'Whatever project'
        </Project>
      </div>
    )
  }
}
