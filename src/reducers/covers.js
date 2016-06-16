import { fromJS } from 'immutable'

export function setSearchResults(state, response) {
  const covers = []
  response.projects.map((p) => {
    covers.push({
      cover: p.covers[202],
      coverRetina: p.covers[404]
    })
  })
  return state.set('covers', fromJS(covers))
}

export function searchError(state) {
  return state
}
