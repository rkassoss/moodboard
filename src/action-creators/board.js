export function addToBoard(cover) {
  return {
    type: 'ADD_TO_BOARD',
    cover: cover
  }
}

export function updateBoard(cover) {
  return {
    type: 'UPDATE_BOARD',
    cover: cover
  }
}
