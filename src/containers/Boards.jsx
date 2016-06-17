import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import * as actionCreators from '../action-creators/board'
import { BoardLink } from '../components/BoardLink'
import { BoardControl } from '../components/BoardControl'


export class Boards extends React.Component {
  getActiveBoard () {
    const { addToBoard, updateBoard, boards, activeBoard, deleteCover, clearBoard } = this.props
    const board = boards.get(activeBoard)
    return <Board   clearBoard={clearBoard}
                  deleteCover={deleteCover}
                  addToBoard={addToBoard}
                  updateBoard={updateBoard}
                  covers={board.get('covers')}
                  name={board.get('name')} />
  }
  getBoardLinks () {
    const { boards, switchBoard } = this.props
    return boards.map((b, i) => {
      return <BoardLink name={b.get('name')} id={i} switchBoard={switchBoard} />
    })
  }
  render() {
    const { activeBoard, boards, createBoard, renameBoard, clearBoard } = this.props
     return (
       <div className='boards'>
         {this.getActiveBoard()}
         <BoardControl
           clearBoard={clearBoard}
           createBoard={createBoard}
           renameBoard={renameBoard} />
         <div className="board-navigation">
           { this.getBoardLinks() }
         </div>
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
