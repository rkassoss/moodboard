import request from 'superagent'

export function searchCovers(query) {
  return function (dispatch, getState) {
    const requestUrl = `https://crossorigin.me/https://www.behance.net/v2/projects?client_id=FPPjPLS6sD6RL7XqmGyaaKJ1fgbhRnDh&q=${query}`
    dispatch(setRecentRequest(requestUrl))
    request.get(requestUrl)
    .end((err, res) => {
      if (err) {
        dispatch(searchError)
      } else {
        dispatch(searchSuccess(res.body))
      }
    })
  }
}

function searchError() {
  return {
    type: 'SEARCH_ERROR'
  }
}

function setRecentRequest(url) {
  return {
    type: 'SET_RECENT_REQUEST',
    url: url
  }
}

function searchSuccess(response) {
  return {
    type: 'SET_SEARCH_RESULTS',
    response: response
  }
}
