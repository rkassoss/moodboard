import request from 'superagent'

export function searchCovers(query) {
  return function (dispatch, getState) {
    const requestUrl = `${getState().getIn(['requests', 'baseUrl'])}&q=${query}`
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

export function searchNewPage(increment) {
  return function (dispatch, getState) {
    const requestUrl = getState().getIn(['requests', 'recentUrl'])
    const page = getState().getIn(['requests', 'page']) + increment
    dispatch(changeSearchPage(page))
    request.get(`${requestUrl}&page=${page}`)
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


function changeSearchPage (page) {
  return {
    type: 'CHANGE_SEARCH_PAGE',
    page: page
  }
}

function searchSuccess(response) {
  return {
    type: 'SET_SEARCH_RESULTS',
    response: response
  }
}
