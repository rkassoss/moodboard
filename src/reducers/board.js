import { fromJS } from 'immutable'

export function updateBoard(state, cover) {
  return state.updateIn(['boards', 0, cover.id], p => {
    return p.set('left', cover.left).set('top', cover.top)
  })
}

export function addToBoard(state, cover) {
  return state.updateIn(['boards', state.get('activeBoard')], board => {
    return board.push(fromJS(cover))
  })
}
