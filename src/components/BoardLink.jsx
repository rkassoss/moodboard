import React, { PropTypes } from 'react'

export class BoardLink extends React.Component {
  handleClick (e) {
    e.preventDefault()
    const { switchBoard, id } = this.props
    switchBoard(id)
  }
  render () {
    return (
      <a href='' onClick={this.handleClick.bind(this)}>
        {this.props.name}
      </a>
    )
  }
}
