import { Map, List, fromJS } from 'immutable'

export function updateBoard (state, cover) {
  return state.updateIn(['boards', state.get('activeBoard'), 'covers', cover.id], nextCover =>
  updatePostion(state.get('grid'), nextCover, cover.left, cover.top))
}

function updatePostion (grid, cover, left, top) {
  return grid
  ? cover.set('left', Math.round(left / 50) * 50).set('top', Math.round(top / 39) * 39)
  : cover.set('left', left).set('top', top)
}

export function addToBoard (state, cover) {
  return state.updateIn(['boards', state.get('activeBoard'), 'covers'], board =>
    board.push(fromJS(cover))
  )
}

export function renameBoard (state, name) {
  return state.setIn(['boards', state.get('activeBoard'), 'name'], name)
}

export function createBoard (state, name) {
  return state.update('boards', board => board.push(Map({name: name, covers: List()})))
}

export function switchBoard (state, id) {
  return state.set('activeBoard', id)
}

export function clearBoard (state) {
  return state.setIn(['boards', state.get('activeBoard'), 'covers'], List())
}

export function deleteCover (state, id) {
  return state.updateIn(['boards', state.get('activeBoard'), 'covers'], board => board.delete(id))
}

export function toggleGrid (state) {
  return state.update('grid', grid => !grid)
}
