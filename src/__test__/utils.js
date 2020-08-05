import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

// test utils file
function renderWithRouter(
  ui,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    state = {},
    search = '',
  } = {},
) {
  history.location.state = state
  history.location.search = search

  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>,
    ),
  }
}

export { renderWithRouter }
