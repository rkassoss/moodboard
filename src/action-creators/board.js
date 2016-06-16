export function addToBoard(project) {
  return {
    type: 'ADD_TO_BOARD',
    project: project
  }
}

export function updateBoard(project) {
  return {
    type: 'UPDATE_BOARD',
    project: project
  }
}
