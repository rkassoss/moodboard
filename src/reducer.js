import { updateBoard, addToBoard } from './reducers/board'
import { Map, List } from 'immutable'

const INITIAL_STATE = Map({
  activeBoard: 0,
  projects: List.of(),
  boards: List.of(
    List.of(
       Map({ top: 20, left: 80, title: 'Drag me around', type: 'internalProject' }),
       Map({ top: 180, left: 80, title: 'This should work', type: 'internalProject' })
    )
  )
})

export default function (state = INITIAL_STATE, action) {
  console.log(action)
  switch(action.type) {
    case 'SET_SEARCH_RESULTS':
      return state
    case 'SEARCH_ERROR':
      return state
    case 'ADD_TO_BOARD':
      return addToBoard(state, action.project)
    case 'UPDATE_BOARD':
      return updateBoard(state, action.project)
    default:
      return state
  }
}
