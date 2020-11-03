import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { reducers } from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
/* istanbul ignore next: this function is too simple to test */
const initStore = () => {
  const middlewares = [sagaMiddleware]

  const isProd = process.env.REACT_APP_ENV && process.env.REACT_APP_ENV.toUpperCase() !== 'PROD'
  // Add Redux Devtools - IF condition
  const composeEnhancer = !isProd ? ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose : compose

  const store = createStore(reducers, composeEnhancer(applyMiddleware(...middlewares)))

  sagaMiddleware.run(sagas)

  return store
}

export default initStore

