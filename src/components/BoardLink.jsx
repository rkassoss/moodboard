import React, { PropTypes } from 'react'

class BoardLink extends React.Component {
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

BoardLink.propTypes = {
  switchBoard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default BoardLink
