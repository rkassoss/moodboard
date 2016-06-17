export function addToBoard (cover) {
  return {
    type: 'ADD_TO_BOARD',
    cover: cover
  }
}

export function updateBoard (cover) {
  return {
    type: 'UPDATE_BOARD',
    cover: cover
  }
}

export function renameBoard (name) {
  return {
    type: 'RENAME_BOARD',
    name: name
  }
}

export function createBoard (name) {
  return {
    type: 'CREATE_BOARD',
    name: name
  }
}

export function switchBoard (id) {
  return {
    type: 'SWITCH_BOARD',
    id: id
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
    id: id
  }
}
