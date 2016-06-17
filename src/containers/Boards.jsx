import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import * as actionCreators from '../action-creators/board'
import BoardLink from '../components/BoardLink'
import BoardControl from '../components/BoardControl'

export class Boards extends React.Component {
  getActiveBoard () {
    const { addToBoard, updateBoard, boards, activeBoard, deleteCover, clearBoard } = this.props
    const board = boards.get(activeBoard)
    return (
      <Board
        hideSourceOnDrag={true}
        clearBoard={clearBoard}
        deleteCover={deleteCover}
        addToBoard={addToBoard}
        updateBoard={updateBoard}
        covers={board.get('covers')}
        name={board.get('name')}
      />
    )
  }
  getBoardLinks () {
    const { boards, switchBoard } = this.props
    return boards.map((b, i) => {
      return <BoardLink key={i} name={b.get('name')} id={i} switchBoard={switchBoard} />
    })
  }
  render () {
    const { createBoard, renameBoard, clearBoard, toggleGrid, grid } = this.props
    return (
      <div className='boards'>
        {this.getActiveBoard()}
        <BoardControl
          clearBoard={clearBoard}
          createBoard={createBoard}
          renameBoard={renameBoard}
          toggleGrid={toggleGrid}
          grid={grid} />
        <div className='board-navigation'>
          {this.getBoardLinks()}
        </div>
      </div>
    )
  }
}

Boards.propTypes = {
  addToBoard: PropTypes.func.isRequired,
  updateBoard: PropTypes.func.isRequired,
  activeBoard: PropTypes.number.isRequired,
  deleteCover: PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired,
  switchBoard: PropTypes.func.isRequired,
  createBoard: PropTypes.func.isRequired,
  renameBoard: PropTypes.func.isRequired,
  toggleGrid: PropTypes.func.isRequired,
  boards: PropTypes.object.isRequired,
  grid: PropTypes.bool.isRequired
}

function mapStateToProps (state) {
  return {
    activeBoard: state.get('activeBoard'),
    boards: state.get('boards'),
    grid: state.get('grid')
  }
}

export const BoardsContainer = connect(mapStateToProps, actionCreators)(Boards)
