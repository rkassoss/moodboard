import { updateBoard, addToBoard, renameBoard, createBoard, switchBoard, deleteCover, clearBoard } from './reducers/board'
import { setSearchResults, setRecentRequest, searchError, changeSearchPage } from './reducers/covers'
import { Map, List } from 'immutable'

const INITIAL_STATE = Map({
  activeBoard: 0,
  requests: Map({
    baseUrl: 'https://crossorigin.me/https://www.behance.net/v2/projects?client_id=FPPjPLS6sD6RL7XqmGyaaKJ1fgbhRnDh',
    recentUrl: null,
    page: 1
  }),
  covers: List.of(),
  boards: List.of(
    Map({
      name: 'Untitled',
      covers: List.of()
    })
  )
})

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return setSearchResults(state, action.response)
    case 'SEARCH_ERROR':
      return searchError(state)
    case 'CHANGE_SEARCH_PAGE':
      return changeSearchPage(state, action.page)
    case 'SET_RECENT_REQUEST':
      return setRecentRequest(state, action.url)
    case 'DELETE_COVER':
      return deleteCover(state, action.id)
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
    case 'CLEAR_BOARD':
      return clearBoard(state)
    default:
      return state
  }
}
