import { fromJS } from 'immutable'

export function updateBoard(state, project) {
  return state.updateIn(['boards', 0, project.id], p => {
    return p.set('left', project.left).set('top', project.top)
  })
}

export function addToBoard(state, project) {
  return state.updateIn(['boards', state.get('activeBoard')], board => {
    project.type = 'internalProject'
    return board.push(fromJS(project))
  })
}
