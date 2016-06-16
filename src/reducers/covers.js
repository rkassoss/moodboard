import { Map, fromJS } from 'immutable'

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

export function setRecentRequest(state, url) {
  return state.update('requests', (r) => {
    return r.set('recentUrl', url).set('page', 1)
  })
}

export function changeSearchPage(state, page) {
  return state.update('requests', (r) => {
    return r.set('page', page)
  })
}
