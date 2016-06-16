import { updateBoard, addToBoard, renameBoard, createBoard, switchBoard } from './reducers/board'
import { setSearchResults, searchError } from './reducers/covers'
import { Map, List } from 'immutable'

const INITIAL_STATE = Map({
  activeBoard: 0,
  covers: List.of(),
  boards: List.of(
    Map({
      name: 'Untitled',
      covers: List.of()
    })
  )
})

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_SEARCH_RESULTS':
      return setSearchResults(state, action.response)
    case 'SEARCH_ERROR':
      return state
    case 'ADD_TO_BOARD':
      return addToBoard(state, action.cover)
    case 'UPDATE_BOARD':
      return updateBoard(state, action.cover)
    case 'RENAME_BOARD':
      return renameBoard(state, action.name)
    case 'CREATE_BOARD':
      return createBoard(state, action.name)
    case 'SWITCH_BOARD':
      return switchBoard(state, action.id)
    default:
      return state
  }
}
