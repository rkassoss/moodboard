import { fromJS } from 'immutable'

export function setSearchResults(state, response) {
  const covers = []
  response.projects.map((p) => {
    covers.push({
      image: p.covers[202]
    })
  })
  return state.set('covers', fromJS(covers))
}

export function searchError(state) {
  return state
}
