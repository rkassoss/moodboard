export function addToBoard (cover) {
  return {
    type: 'ADD_TO_BOARD',
    cover
  }
}

export function updateBoard (cover) {
  return {
    type: 'UPDATE_BOARD',
    cover
  }
}

export function renameBoard (name) {
  return {
    type: 'RENAME_BOARD',
    name
  }
}

export function createBoard (name) {
  return {
    type: 'CREATE_BOARD',
    name
  }
}

export function switchBoard (id) {
  return {
    type: 'SWITCH_BOARD',
    id
  }
}

export function clearBoard () {
  return {
    type: 'CLEAR_BOARD'
  }
}

export function deleteCover (id) {
  return {
    type: 'DELETE_COVER',
    id
  }
}

export function toggleGrid () {
  return {
    type: 'TOGGLE_GRID'
  }
}
