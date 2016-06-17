import { Map, List, fromJS } from 'immutable'

export function updateBoard(state, cover) {
  return state.updateIn(['boards', state.get('activeBoard'), 'covers', cover.id], p => {
    return p.set('left', cover.left).set('top', cover.top)
  })
}

export function addToBoard(state, cover) {
  return state.updateIn(['boards', state.get('activeBoard'), 'covers'], board => {
    return board.push(fromJS(cover))
  })
}

export function renameBoard(state, name) {
  return state.setIn(['boards', state.get('activeBoard'), 'name'], name)
}

export function createBoard(state, name) {
  return state.update('boards', (b) => {
    return b.push(Map({
      name: name,
      covers: List()
    }))
  })
}

export function switchBoard(state, id) {
  return state.set('activeBoard', id)
}

export function clearBoard(state) {
  return state.setIn(['boards', state.get('activeBoard'), 'covers'], List())
}

export function deleteCover(state, id) {
  return state.updateIn(['boards', state.get('activeBoard'), 'covers'], (b) => {
    return b.delete(id)
  })
}
