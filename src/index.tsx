import * as serviceWorker from './serviceWorker'
import React, { ReactElement } from 'react'

import { StoreProvider } from 'easy-peasy'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'

import store, { persistor } from './store'

function Root(): ReactElement {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<Root />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
