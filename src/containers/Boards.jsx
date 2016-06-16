import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import * as actionCreators from '../action-creators/board'


export class Boards extends React.Component {
  getActiveBoard () {
    const { addToBoard, updateBoard, boards } = this.props
    return <Board addToBoard={addToBoard}
                  updateBoard={updateBoard}
                  projects={boards.get(0)}
                  hideSourceOnDrag={true}/>
  }
  render() {
     return (
       <div className='board-container'>
         {this.getActiveBoard()}
       </div>
     )
  }
}


function mapStateToProps (state) {
  return {
    activeBoard: state.get('activeBoard'),
    boards: state.get('boards')
  }
}

export const BoardsContainer = connect(mapStateToProps, actionCreators)(Boards)
